import { Interceptor } from "./interceptor";

export const Trending = {
  Trending: async (time_window: "day" | "week", data: "movie" | "tv") => {
    try {
      const response = await Interceptor().get(
        `/3/trending/${data}/${time_window}?language=en-US'`,
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },

  NowPlaying: async () => {
    try {
      const response = await Interceptor().get("/3/movie/now_playing");
      return response.data;
    } catch (error) {
      throw new Error("gagal njir");
    }
  },

  Upcoming: async () => {
    try {
      const response = await Interceptor().get("/3/movie/upcoming", {
        params: {
          language: "en-US",
          page: 1,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("upcoming gagal");
    }
  },
};
