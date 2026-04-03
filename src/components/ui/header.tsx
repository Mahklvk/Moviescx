import { ThemedText } from "@/components/themed-text";
import { StyleSheet } from "react-native";
import "../../../input.css";

import { View, TextInput } from "react-native";
export function Header() {
  return (
    <View className="sticky">
      <ThemedText className="text-center h-15" type="title">
        MOVIEScx.
      </ThemedText>
      <View className="border-2 border-green-200 me-2 ms-2">
            <TextInput placeholder="Search movie..." className="text-white" />
          </View>
    </View>
  );
}