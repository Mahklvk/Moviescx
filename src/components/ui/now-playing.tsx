import { Trending } from "@/api/trending";
import Movie from "@/interface/movies";
import Tv from "@/interface/tv";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
import { RenderNowPlaying } from "./renderer/render-now-playing";

type Media = Movie

export function NowPlaying() {

  const { data: nowPlaying = [], isLoading } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: () => Trending.NowPlaying(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  return (
    <View>
      <FlatList
        className="item-center"
        data={isLoading ? Array(5).fill({}) : nowPlaying}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderNowPlaying item={item as Media} isLoading={isLoading} />
        )}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
