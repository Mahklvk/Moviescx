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

  const { data: nowPlaying = [] } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: () => Trending.NowPlaying(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });
  const renderNowPlaying = useCallback(({ item }: { item: Media }) => {
    return <RenderNowPlaying item={item} />;
  }, []);

  return (
    <View>
      <FlatList
        className="item-center"
        data={nowPlaying}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNowPlaying}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
