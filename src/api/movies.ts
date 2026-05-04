import { Interceptor } from "./interceptor";
type SearchMoviesParams = {
  query: string;
  page?: number;
};
export const apiMovie = {
  Trending: async () => {
    try {
      const response = await Interceptor().get(
        `/3/trending/movie/day`,
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },

  Genres: async () => {
    try {
      const response = await Interceptor().get(
        '/3/genre/movie/list'
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

  Search: async (params: SearchMoviesParams) => {
    try {
      const response = await Interceptor().get("/3/search/movie", {
        params,
      });
      return response.data;
    } catch (error) {
      throw new Error('gagal ambil data njir')
    }
  }
};
