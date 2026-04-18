import { Trending } from "@/api/trending";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { RenderUpcoming } from "./renderer/render-upcoming";

type Media = Movie;

export function Upcoming() {
  const { data: upcoming = [], isLoading } = useQuery({
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
        data={isLoading ? Array(5).fill({}) : upcoming}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderUpcoming item={item as Media} isLoading={isLoading} />
        )}
        indicatorStyle="white"
        initialNumToRender={3}
        horizontal={true}
        removeClippedSubviews={true}
      />
    </View>
  );
}
