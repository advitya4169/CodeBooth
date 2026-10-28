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

    return {
      success: true,
      output: response.data.output,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      output: "",
    };
  }
};
