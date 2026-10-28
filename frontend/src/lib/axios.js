import axios from "axios"
import { API_BASE_URL } from "./apiConfig";
const axiosInstance = axios.create({
    baseURL:API_BASE_URL,
    withCredentials:true //browser will send cookies to the server autmatically on every single request
})
export default axiosInstance;
