import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

export const executeCode = async (language, code) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/execute`,
      {
        language:
          language === "python"
            ? "python3"
            : language === "cpp"
            ? "cpp"
            : "nodejs",
        script: code,
      }
    );

    const data = response.data || {};
    const output = typeof data.output === "string" ? data.output : "";
    const statusCode = data.statusCode;
    const failed =
      data.success === false ||
      data.isExecutionSuccess === false ||
      (statusCode !== undefined && Number(statusCode) !== 200);

    if (failed) {
      return {
        success: false,
        kind: "execution-error",
        output,
        error: data.error || data.message || output || "Code execution failed.",
        statusCode,
      };
    }

    return {
      success: true,
      kind: "success",
      output,
      statusCode,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      kind: error.response ? "provider-error" : "network-error",
      output: error.response?.data?.output || "",
      error:
        error.response?.data?.message ||
        error.response?.data?.error ||
        (error.response
          ? "The code execution service could not complete this request."
          : "Could not reach the code execution service. Check your connection and try again."),
      statusCode: error.response?.data?.statusCode,
    };
  }
};
