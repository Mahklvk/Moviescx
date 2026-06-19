import { apiMovie } from "@/api/movies";
import Movie from "@/interface/movies";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { RenderTopRated } from "./renderer/render-top-rated";

type Media = Movie;
export function Carousels() {
  const { data: topRate = [], isLoading } = useQuery({
    queryKey: ["topRated"],
    queryFn: apiMovie.TopRated,
    select: (data) => data.results,
    staleTime: 1000 * 60 * 10,
  });
  return (
    <View>
      <Carousel
        width={410}
        height={150}
        autoPlayInterval={1000}
        data={isLoading ? Array(5).fill({}) : topRate}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        onSnapToItem={(index: number) => index}
        renderItem={({ item }) => (
          <RenderTopRated item={item as Media} isLoading={isLoading} />
        )}
      />
    </View>
  );
}
