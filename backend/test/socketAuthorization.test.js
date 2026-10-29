import test from "node:test";
import assert from "node:assert/strict";
import {
  createClerkSocketAuthMiddleware,
  registerSessionSocketHandlers,
} from "../src/lib/socketAuth.js";

const sessionId = "507f1f77bcf86cd799439011";
const activeSession = {
  status: "active",
  host: { clerkId: "clerk_host" },
  participant: { clerkId: "clerk_participant" },
};

function createSocket(clerkId, id = `socket-${clerkId}`) {
  const handlers = new Map();
  const emitted = [];
  const socket = {
    id,
    handshake: { auth: {}, headers: { origin: "https://codebooth.example" } },
    data: { clerkId },
    rooms: new Set([id]),
    on(event, handler) { handlers.set(event, handler); },
    join(room) { this.rooms.add(room); },
    to(room) {
      return { emit: (event, payload) => emitted.push({ room, event, payload }) };
    },
  };
  return { socket, handlers, emitted };
}

function createIo() {
  let connectionHandler;
  return {
    on(event, handler) {
      if (event === "connection") connectionHandler = handler;
    },
    connect(socket) { connectionHandler(socket); },
  };
}

function createSessionModel(session) {
  return {
    findById(id) {
      assert.equal(id, sessionId);
      const query = {
        populate() { return this; },
        then(resolve, reject) { return Promise.resolve(session).then(resolve, reject); },
      };
      return query;
    },
  };
}

test("rejects socket connections without a Clerk session token", async () => {
  let clerkCalled = false;
  const middleware = createClerkSocketAuthMiddleware({
    authenticateRequest: async () => { clerkCalled = true; },
  });
  const { socket } = createSocket(null);
  let authError;

  await middleware(socket, (error) => { authError = error; });

  assert.equal(clerkCalled, false);
  assert.equal(authError.message, "Authentication required");
});

test("accepts a verified Clerk token and stores only the authenticated Clerk ID", async () => {
  let receivedRequest;
  const middleware = createClerkSocketAuthMiddleware({
    authenticateRequest: async (request, options) => {
      receivedRequest = request;
      assert.equal(options.acceptsToken, "session_token");
      return { isAuthenticated: true, toAuth: () => ({ userId: "clerk_host" }) };
    },
  });
  const { socket } = createSocket(null);
  socket.handshake.auth.token = "test-session-token";
  let authError;

  await middleware(socket, (error) => { authError = error; });

  assert.equal(authError, undefined);
  assert.equal(socket.data.clerkId, "clerk_host");
  assert.equal(receivedRequest.headers.get("authorization"), "Bearer test-session-token");
  assert.equal(receivedRequest.headers.get("origin"), "https://codebooth.example");
});

test("rejects a validly authenticated user who is not a session member", async () => {
  const io = createIo();
  registerSessionSocketHandlers(io, createSessionModel(activeSession));
  const { socket, handlers } = createSocket("clerk_other");
  io.connect(socket);
  let result;

  await handlers.get("join-session")(sessionId, (response) => { result = response; });

  assert.deepEqual(result, { success: false, message: "Not authorized for this session." });
  assert.equal(socket.rooms.has(sessionId), false);
});

test("rejects invalid room IDs without querying MongoDB", async () => {
  let queried = false;
  const io = createIo();
  registerSessionSocketHandlers(io, {
    findById() { queried = true; throw new Error("must not query"); },
  });
  const { socket, handlers } = createSocket("clerk_host");
  io.connect(socket);
  let result;

  await handlers.get("join-session")("not-an-object-id", (response) => { result = response; });

  assert.equal(queried, false);
  assert.equal(result.success, false);
});

test("blocks broadcasts before authorization and permits legitimate participants after reconnect", async () => {
  const io = createIo();
  registerSessionSocketHandlers(io, createSessionModel(activeSession));

  const outsider = createSocket("clerk_other");
  io.connect(outsider.socket);
  let denied;
  outsider.handlers.get("code-change")(
    { sessionId, code: "injected" },
    (response) => { denied = response; }
  );
  assert.equal(denied.success, false);
  assert.deepEqual(outsider.emitted, []);

  const host = createSocket("clerk_host");
  const participant = createSocket("clerk_participant");
  io.connect(host.socket);
  io.connect(participant.socket);
  await host.handlers.get("join-session")(sessionId, () => {});
  await participant.handlers.get("join-session")(sessionId, () => {});

  const reconnectedParticipant = createSocket("clerk_participant", "socket-participant-reconnected");
  io.connect(reconnectedParticipant.socket);
  let joinResult;
  await reconnectedParticipant.handlers.get("join-session")(sessionId, (response) => { joinResult = response; });
  let broadcastResult;
  reconnectedParticipant.handlers.get("code-change")(
    { sessionId, code: "function solve() {}" },
    (response) => { broadcastResult = response; }
  );

  assert.deepEqual(joinResult, { success: true });
  assert.deepEqual(broadcastResult, { success: true });
  assert.deepEqual(reconnectedParticipant.emitted, [
    { room: sessionId, event: "code-change", payload: "function solve() {}" },
  ]);
});
