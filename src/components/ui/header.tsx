import { ThemedText } from "@/components/themed-text";
import "../../../input.css";

import { View } from "react-native";
export function Header() {
    
  return (
    <View className="sticky">
      <ThemedText type="title" className="text-center">
        Moviescx
      </ThemedText>
    </View>
  );
}
