import { ThemedText } from "@/components/themed-text";
import { Image } from "expo-image";
import "../../../input.css";
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { View } from "react-native";
export function HeaderSearch() {
  return (
    <View className="sticky justify-between flex-row">
      <ThemedText className="h-10 ms-5">MOVIEScx.</ThemedText>
      <EvilIcons name="search" size={24} color="#CBDAFD" className="me-5" />
    </View>
  );
}
