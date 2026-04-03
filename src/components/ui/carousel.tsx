import { TopRated } from "@/api/top-rated";
import Tv from "@/interface/tv";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { View } from "react-native";
import { RenderTopRated } from "./render-top-rated";

export function Carousels() {
  const progress = useSharedValue<number>(0);

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
        width={400}
        height={300}
        autoPlayInterval={2000}
        data={topRate}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={(offsetProgress, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        renderItem={renderTopRated}
      />
    </View>
  );
}
