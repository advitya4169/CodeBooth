import axios from "axios";
import { ENV } from "../lib/env.js";

const JDoodleUrl = "https://api.jdoodle.com/v1/execute";
const providerTimeoutMs = 25_000;
const supportedLanguages = new Set(["nodejs", "python3", "cpp"]);

function sendFailure(res, status, message, kind) {
  return res.status(status).json({ success: false, kind, message });
}

function getProviderFailure(error) {
  const upstreamStatus = error.response?.status;

  if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
    return { status: 504, kind: "provider-timeout", message: "Execution provider timed out. Please try again." };
  }
  if (upstreamStatus === 401 || upstreamStatus === 403) {
    return { status: 502, kind: "provider-auth-error", message: "Execution provider rejected its configured credentials." };
  }
  if (upstreamStatus === 429) {
    return { status: 503, kind: "provider-rate-limit", message: "Execution provider quota is unavailable right now. Please try again later." };
  }
  if (upstreamStatus >= 500) {
    return { status: 502, kind: "provider-error", message: "Execution provider is temporarily unavailable." };
  }
  if (upstreamStatus) {
    return { status: 502, kind: "provider-request-error", message: "Execution provider rejected the request." };
  }
  return { status: 502, kind: "provider-network-error", message: "Could not reach the execution provider. Please try again." };
}

export const executeCode = async (req, res) => {
  const { script, language } = req.body || {};

  if (typeof script !== "string" || !script.trim() || !supportedLanguages.has(language)) {
    return sendFailure(res, 400, "A non-empty script and supported language are required.", "invalid-request");
  }

  if (!ENV.JDOODLE_CLIENT_ID || !ENV.JDOODLE_CLIENT_SECRET) {
    console.error("Code execution unavailable: JDoodle credentials are not configured.");
    return sendFailure(res, 503, "Code execution is not configured. Please contact support.", "execution-unavailable");
  }

  try {
    const versionIndex = language === "cpp" ? "5" : "0";
    const response = await axios.post(
      JDoodleUrl,
      {
        clientId: ENV.JDOODLE_CLIENT_ID,
        clientSecret: ENV.JDOODLE_CLIENT_SECRET,
        script,
        language,
        versionIndex,
      },
      { timeout: providerTimeoutMs }
    );

    const data = response.data;
    if (
      !data ||
      typeof data !== "object" ||
      Array.isArray(data) ||
      typeof data.output !== "string" ||
      !Number.isFinite(Number(data.statusCode))
    ) {
      console.error("Code execution provider returned a malformed response.");
      return sendFailure(res, 502, "Execution provider returned an invalid response.", "provider-response-error");
    }

    return res.status(200).json({
      output: data.output,
      statusCode: Number(data.statusCode),
      ...(typeof data.memory === "string" && { memory: data.memory }),
      ...(typeof data.cpuTime === "string" && { cpuTime: data.cpuTime }),
    });
  } catch (error) {
    const failure = getProviderFailure(error);
    const safeErrorCode = typeof error.code === "string" && /^[A-Z0-9_]+$/.test(error.code)
      ? error.code
      : undefined;
    console.error("Code execution provider request failed.", {
      upstreamStatus: Number.isInteger(error.response?.status) ? error.response.status : undefined,
      errorCode: safeErrorCode,
    });
    return sendFailure(res, failure.status, failure.message, failure.kind);
  }
};
