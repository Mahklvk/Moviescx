import { Trending } from "@/api/trending";
import Movie from "@/interface/movies";
import Tv from "@/interface/tv";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
import { RenderTrending } from "./renderer/render-trending";

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
        {/* Kanan: Day / Week */}
        <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
          {["day", "week"].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setFilterTime(item as "day" | "week")}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                backgroundColor:
                  filterTime === item ? "transparent" : "#b4befe",
                borderColor: "#89b4fa",
                borderWidth: 2,
                borderRadius: 10,
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
        className="item-center"
        data={trending}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTrending}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
