import mongoose from "mongoose";

export function createClerkSocketAuthMiddleware(clerkClient) {
  return async (socket, next) => {
    const token = socket.handshake.auth?.token;
    if (typeof token !== "string" || token.length === 0) {
      return next(new Error("Authentication required"));
    }

    try {
      const headers = new Headers({ authorization: `Bearer ${token}` });
      const origin = socket.handshake.headers?.origin;
      if (origin) headers.set("origin", origin);

      const request = new Request("http://localhost/socket.io", { headers });
      const authState = await clerkClient.authenticateRequest(request, {
        acceptsToken: "session_token",
      });

      if (!authState.isAuthenticated) {
        return next(new Error("Authentication required"));
      }

      const clerkId = authState.toAuth().userId;
      if (!clerkId) return next(new Error("Authentication required"));

      socket.data.clerkId = clerkId;
      return next();
    } catch {
      return next(new Error("Authentication failed"));
    }
  };
}

function acknowledge(callback, response) {
  if (typeof callback === "function") callback(response);
}

export function registerSessionSocketHandlers(io, Session) {
  io.on("connection", (socket) => {
    socket.data.authorizedSessionIds = new Set();

    socket.on("join-session", async (sessionId, callback) => {
      if (typeof sessionId !== "string" || !mongoose.isValidObjectId(sessionId)) {
        return acknowledge(callback, { success: false, message: "Invalid session." });
      }

      try {
        const session = await Session.findById(sessionId)
          .populate("host", "clerkId")
          .populate("participant", "clerkId");
        const clerkId = socket.data.clerkId;
        const isMember =
          session?.status === "active" &&
          (session.host?.clerkId === clerkId || session.participant?.clerkId === clerkId);

        if (!isMember) {
          return acknowledge(callback, { success: false, message: "Not authorized for this session." });
        }

        await socket.join(sessionId);
        socket.data.authorizedSessionIds.add(sessionId);
        return acknowledge(callback, { success: true });
      } catch {
        return acknowledge(callback, { success: false, message: "Could not join this session." });
      }
    });

    socket.on("code-change", (payload, callback) => {
      const sessionId = payload?.sessionId;
      const isAuthorized =
        typeof sessionId === "string" &&
        mongoose.isValidObjectId(sessionId) &&
        socket.data.authorizedSessionIds.has(sessionId) &&
        socket.rooms.has(sessionId);

      if (!isAuthorized || typeof payload?.code !== "string") {
        return acknowledge(callback, { success: false, message: "Not authorized for this session." });
      }

      socket.to(sessionId).emit("code-change", payload.code);
      return acknowledge(callback, { success: true });
    });
  });
}
