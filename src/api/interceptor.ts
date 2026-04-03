import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

if (!apiKey || !baseUrl) {
  throw new Error("Missing API_KEY or BASE_URL in environment variables");
}
export const Interceptor = () => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${apiKey}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};