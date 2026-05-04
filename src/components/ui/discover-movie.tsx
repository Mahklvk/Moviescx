import { Discover } from "@/api/discovery";
import { apiMovie } from "@/api/movies";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { FlatList, View } from "react-native";
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

  return (
    <View>
      <FlatList
        className="item-center"
        data={isLoading ? Array(5).fill({}) : discover}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderDiscoverMovie
            item={item as Movie}
            genres={genreData?.genres}
            isLoading={isLoading}
          />
        )}
        indicatorStyle="white"
        initialNumToRender={3}
        numColumns={2}
        removeClippedSubviews={true}
      />
    </View>
  );
}
