import { apiMovie } from "@/api/movies";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
import { RenderTrending } from "./renderer/render-trending";

export function Trendings() {

  const { data: trending = [], isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: () => apiMovie.Trending(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5,
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
        data={isLoading ? Array(5).fill({}) : trending}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderTrending item={item as Movie} genres={genreData?.genres} isLoading={isLoading} />
        )}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
