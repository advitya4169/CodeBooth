import test from "node:test";
import assert from "node:assert/strict";
import { connectWithClerkToken, joinSessionOnConnect } from "../src/lib/sessionSocket.js";

test("requests a fresh Clerk session token for each socket connection", async () => {
  let authCallback;
  let connects = 0;
  const socket = {
    set auth(value) { authCallback = value; },
    connect() { connects += 1; },
  };
  let tokenNumber = 0;

  connectWithClerkToken(socket, async () => `session-token-${++tokenNumber}`);
  const firstAuth = await new Promise((resolve) => authCallback(resolve));
  const secondAuth = await new Promise((resolve) => authCallback(resolve));

  assert.equal(connects, 1);
  assert.deepEqual(firstAuth, { token: "session-token-1" });
  assert.deepEqual(secondAuth, { token: "session-token-2" });
});

test("joins immediately when connected and rejoins after reconnect", () => {
  const listeners = new Map();
  const emitted = [];
  const socket = {
    connected: true,
    on(event, handler) { listeners.set(event, handler); },
    off(event, handler) {
      if (listeners.get(event) === handler) listeners.delete(event);
    },
    emit(...args) { emitted.push(args); },
  };

  const cleanup = joinSessionOnConnect(socket, "session-123");
  assert.deepEqual(emitted, [["join-session", "session-123"]]);

  socket.connected = false;
  socket.connected = true;
  listeners.get("connect")();
  assert.deepEqual(emitted, [
    ["join-session", "session-123"],
    ["join-session", "session-123"],
  ]);

  cleanup();
  assert.equal(listeners.has("connect"), false);
});
