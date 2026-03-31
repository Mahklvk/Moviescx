import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

if (!apiKey || !baseUrl) {
  throw new Error("Missing API_KEY or BASE_URL in environment variables");
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 detik timeout
});

// Interceptor untuk menambahkan token ke setiap request
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${apiKey}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const Trending = {
  Movies: async () => {
    try {
      const response = await axiosInstance.get("/3/trending/movie/day");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },
};
