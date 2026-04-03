import { Interceptor } from "./interceptor";

export const Trending = {
  Trending: async (time_window: "day" | "week", data: "movie" | "tv") => {
    try {
      const response = await Interceptor().get(`/3/trending/${data}/${time_window}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },
};
