import { Interceptor } from "./interceptor";

export const TopRated = {
    topRated: async () => {
    try {
      const response = await Interceptor().get("/3/tv/top_rated");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },
}