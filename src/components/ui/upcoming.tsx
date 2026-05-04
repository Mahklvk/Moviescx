import { apiMovie } from "@/api/movies";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { RenderUpcoming } from "./renderer/render-upcoming";

type Media = Movie;

export function Upcoming() {
  const { data: upcoming = [], isLoading } = useQuery({
    queryKey: ["upComing"],
    queryFn: () => apiMovie.Upcoming(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5, // cache 5 menit
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
        data={isLoading ? Array(5).fill({}) : upcoming}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderUpcoming
            item={item as Media}
            genres={genreData?.genres}
            isLoading={isLoading}
          />
        )}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
