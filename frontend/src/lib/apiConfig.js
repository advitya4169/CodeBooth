const trimTrailingSlashes = (value = "") => value.trim().replace(/\/+$/, "");

const configuredApiUrl = trimTrailingSlashes(import.meta.env.VITE_API_URL || "");
const configuredSocketUrl = trimTrailingSlashes(import.meta.env.VITE_SOCKET_URL || "");
const backendUrl = configuredApiUrl || configuredSocketUrl;

export const API_BASE_URL = backendUrl
  ? /\/api$/i.test(backendUrl)
    ? backendUrl
    : `${backendUrl}/api`
  : "";

export const SOCKET_URL = (configuredSocketUrl || backendUrl).replace(/\/api$/i, "");
