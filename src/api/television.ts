import { Interceptor } from "./interceptor";

export const Television = {
    onTheAir: async () => {
    try {
      const response = await Interceptor().get(`/3/tv/on_the_air`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie");
    }
  },
}
