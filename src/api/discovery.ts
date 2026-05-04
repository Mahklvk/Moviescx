import { Interceptor } from "./interceptor";

export const Discover = {
  Movies: async () => {
    try {
      const response = await Interceptor().get("/3/discover/movie");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },
};
