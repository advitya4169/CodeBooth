import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import axiosInstance from "../lib/axios";

function ClerkTokenInterceptor() {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const interceptorId = axiosInstance.interceptors.request.use(async (config) => {
      if (isSignedIn) {
        const token = await getToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => axiosInstance.interceptors.request.eject(interceptorId);
  }, [getToken, isSignedIn]);

  return null;
}

export default ClerkTokenInterceptor;
