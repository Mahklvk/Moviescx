import { useQuery } from "@tanstack/react-query";
import { apiMovie } from "@/api/movies";
import { useDebounce } from "./use-debounce";

export const useSearchMovies = (query: string) => {
  const debouncedQuery = useDebounce(query, 500);

  return useQuery({
    queryKey: ["searchMovies", debouncedQuery],
    queryFn: () =>
      apiMovie.Search({
        query: debouncedQuery,
      }),
    enabled: !!debouncedQuery,
  });
};