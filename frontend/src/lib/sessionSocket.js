export function connectWithClerkToken(socket, getToken) {
  socket.auth = (callback) => {
    getToken()
      .then((token) => callback(token ? { token } : {}))
      .catch(() => callback({}));
  };
  socket.connect();
}

export function joinSessionOnConnect(socket, sessionId) {
  if (!socket || !sessionId) return () => {};

  const joinSession = () => socket.emit("join-session", sessionId);
  socket.on("connect", joinSession);

  if (socket.connected) joinSession();

  return () => socket.off("connect", joinSession);
}
