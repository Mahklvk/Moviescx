import { Interceptor } from "./interceptor";
type SearchMoviesParams = {
  query: string;
  page?: number;
};
import { WatchProvider } from "@/interface/streaming";
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

  TopRated: async () => {
    try {
      const response = await Interceptor().get(
        '/3/movie/top_rated'
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
  }, 

  Detail: async (movie_id: number) => {
    try {
      const response = await Interceptor().get(`/3/movie/${movie_id}`)
      return response.data;
    } catch (error) {
      throw new Error('gagal ambil  data ')
    }
  },

   Credits: async (movie_id: number) => {
    try {
      const response = await Interceptor().get(`/3/movie/${movie_id}/credits`)
      return response.data;
    } catch (error) {
      throw new Error('gagal ambil  data ')
    }
  },
   
  WatchProviders: async (movie_id: number): Promise<WatchProvider> => {
  try {
    const response = await Interceptor().get(`/3/movie/${movie_id}/watch/providers`);
    return response.data;
  } catch (error) {
    throw new Error("gagal ambil data watch providers");
  }
  },
  
  Reviews: async (movie_id: number) => {
    try {
      const response = await Interceptor().get(`/3/movie/${movie_id}/reviews`)
      return response.data;
    } catch (error) {
      throw new Error('gagal ambil  data ')
    }
  }
};
