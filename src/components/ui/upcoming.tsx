import { Trending } from "@/api/trending";
import Movie from "@/interface/movies";
import Tv from "@/interface/tv";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
import { RenderUpcoming } from "./renderer/render-upcoming";

type Media = Movie

export function Upcoming() {

  const { data: upcoming = [] } = useQuery({
    queryKey: ["upComing"],
    queryFn: () => Trending.Upcoming(),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });
  const renderUpcoming = useCallback(({ item }: { item: Media }) => {
    return <RenderUpcoming item={item} />;
  }, []);

  return (
    <View>
      <FlatList
        className="item-center"
        data={upcoming}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUpcoming}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
