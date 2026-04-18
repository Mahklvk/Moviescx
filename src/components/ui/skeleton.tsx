import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export type SkeletonProps = {
  type?: "trending" | "nowPlaying" | "upcoming" | "carousel";
};

const skeletonConfig = {
  trending: {
    image: { width: 150, height: 200 },
    text: { width: 150, height: 20 },
  },
  nowPlaying: {
    image: { width: 300, height: 200 },
    text: { width: 300, height: 20 },
  },
  upcoming: {
    image: { width: 150, height: 200 },
    text: { width: 150, height: 20 },
  },
  carousel: {
    image: { width: 410, height: 150 },
    text: { width:20, height: 20 },
  }
};

export default function CardSkeleton({ type = "trending" }: SkeletonProps) {
  const config = skeletonConfig[type];

  return (
    <View style={{ alignItems: "center", margin: 20 }}>
      <Skeleton
        colorMode="dark"
        width={config.image.width}
        height={config.image.height}
        radius={10}
      />
      <Skeleton
        colorMode="dark"
        width={config.text.width}
        height={config.text.height}
        radius={5}
      />
    </View>
  );
}