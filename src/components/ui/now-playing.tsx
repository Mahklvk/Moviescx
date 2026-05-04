import { apiMovie } from "@/api/movies";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { FlatList, View } from "react-native";
import { RenderNowPlaying } from "./renderer/render-now-playing";

type Media = Movie;

export function NowPlaying() {
  const { data: nowPlaying = [], isLoading } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: () => apiMovie.NowPlaying(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  const { data: genreData } = useQuery({
    queryKey: ["genres",],
    queryFn: () => apiMovie.Genres(),
    staleTime: 1000 * 60 * 5, 
  });

  return (
    <View>
      <FlatList
        className="item-center"
        data={isLoading ? Array(5).fill({}) : nowPlaying}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderNowPlaying item={item as Media} genres={genreData?.genres || []} isLoading={isLoading} />
        )}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
