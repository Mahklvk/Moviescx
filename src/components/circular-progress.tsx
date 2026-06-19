import Svg, { Circle } from "react-native-svg";
import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";

type Props = {
  rating: number;
};

export default function CircularRating({ rating }: Props) {
  const percentage = Math.round(rating * 10);
  const radius = 30;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (circumference * percentage) / 100;

  const getColor = () => {
    if (percentage >= 70) return "#22c55e";
    if (percentage >= 50) return "#eab308";
    return "#ef4444";
  };

  return (
    <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
      <Svg width={80} height={80}>
        <Circle
          stroke="#2a2a2a"
          fill="none"
          cx="40"
          cy="40"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={getColor()}
          fill="none"
          cx="40"
          cy="40"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="40,40"
        />
      </Svg>
      <View
        style={{
          position: "absolute",
        alignItems: "center",
          marginLeft:27
        }}
      >
        <ThemedText type="smallBold">{percentage}%</ThemedText>
      </View>
    </View>
  );
}