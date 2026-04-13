import { Trending } from "@/api/trending";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
import { useCallback, useEffect } from "react";
import { RenderTrending } from "./render-trending";
import Tv from "@/interface/tv"
import Movie from "@/interface/movies";

type Media = Movie | Tv;

export function Trendings() {
  const [filterTime, setFilterTime] = useState<"day" | "week">("day");
  const [filterTrending, setFilterTrending] = useState<"movie" | "tv">("movie");
  
  const { data: trending = [] } = useQuery({
    queryKey: ["tv", filterTime, filterTrending],
    queryFn: () => Trending.Trending(filterTime, filterTrending),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });
    const renderTrending = useCallback(({ item }: { item: Media }) => {
      return <RenderTrending item={item} />;
    }, []);
  
  return (
    <View>
    <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
      {/* Kiri: Movie / TV */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        {["movie", "tv"].map((trending) => (
          <TouchableOpacity
            key={trending}
            onPress={() => setFilterTrending(trending as "movie" | "tv")}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor:
                filterTrending === trending ? "transparent" : "#c6a0f6",
              borderColor: "#a6da95",
              borderWidth: 2,
            }}
          >
            <ThemedText
              style={{
                color: filterTrending === trending ? "#cad3f5" : "#24273a",
              }}
            >
              {trending.toUpperCase()}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
      {/* Spacer di tengah */}
      <View style={{ flex: 1 }} />
      {/* Kanan: Day / Week */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        {["day", "week"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setFilterTime(item as "day" | "week")}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor: filterTime === item ? "transparent" : "#c6a0f6",
              borderColor: "#a6da95",
              borderWidth: 2,
            }}
          >
            <ThemedText
              style={{
                color: filterTime === item ? "#cad3f5" : "#24273a",
              }}
            >
              {item.toUpperCase()}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
      </View>
      <FlatList
        data={trending}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTrending}
        indicatorStyle="white"
        horizontal={true}
        initialNumToRender={2}
        removeClippedSubviews={true}
      />
      </View>
  );
}
