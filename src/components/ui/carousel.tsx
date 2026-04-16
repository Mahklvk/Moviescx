import { TopRated } from "@/api/top-rated";
import Tv from "@/interface/tv";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { RenderTopRated } from "./renderer/render-top-rated";

export function Carousels() {
  const scrollOffsetValue = useSharedValue<number>(0);

  const { data: topRate = [] } = useQuery({
    queryKey: ["topRated"],
    queryFn: TopRated.topRated,
    select: (data) => data.results,
    staleTime: 1000 * 60 * 10,
  });

  const renderTopRated = useCallback(({ item }: { item: Tv }) => {
    return <RenderTopRated item={item} />;
  }, []);

  return (
    <View>
      <Carousel
        width={410}
        height={150}
        autoPlayInterval={1000}
        data={topRate}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        onSnapToItem={(index: number) => index}
        renderItem={renderTopRated}
      />
    </View>
  );
}
