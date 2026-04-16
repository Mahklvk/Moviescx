import { ThemedText } from "@/components/themed-text";
import { Image } from "expo-image";
import "../../../input.css";

import { View } from "react-native";
export function HeaderNoSearch() {
  return (
    <View className="sticky ">
      <ThemedText className="h-10 ms-5">MOVIEScx.</ThemedText>
    </View>
  );
}
