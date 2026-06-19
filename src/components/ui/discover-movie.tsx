import { Discover } from "@/api/discovery";
import { apiMovie } from "@/api/movies";
import { SearchMovies } from "@/components/ui/search";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList } from "react-native";
import { RenderDiscoverMovie } from "./renderer/render-discover-movie";
export function DiscoverMovie() {
  const { data: discover = [], isLoading } = useQuery({
    queryKey: ["discover"],
    queryFn: () => Discover.Movies(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5,
  });

  const { data: genreData } = useQuery({
    queryKey: ["genres"],
    queryFn: () => apiMovie.Genres(),
    staleTime: 1000 * 60 * 5,
  });

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SearchMovies searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {!searchQuery && (
        <FlatList
          data={isLoading ? Array(6).fill({}) : discover}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <RenderDiscoverMovie
              item={item as Movie}
              genres={genreData?.genres}
              isLoading={isLoading}
            />
          )}
        />
      )}
    </>
  );
}
