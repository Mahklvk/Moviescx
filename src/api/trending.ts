import { Interceptor } from "./interceptor";

export const Trending = {
  All: async (time_window: "day" | "week") => {
    try {
      const response = await Interceptor().get(`/3/trending/all/${time_window}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },

  Tv: async (time_window: "day" | "week") => {
    try {
      const response = await Interceptor().get(`/3/trending/tv/${time_window}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },

  Movies: async (time_window: "day" | "week") => {
    try {
      const response = await Interceptor().get(`/3/trending/movie/${time_window}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },
};
