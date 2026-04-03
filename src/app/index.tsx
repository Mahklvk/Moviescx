import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../input.css";

import { Header } from "@/components/ui/header";
import { Filters } from "@/components/ui/trending";
import { useTheme } from "@/hooks/use-theme";
import React, { useCallback } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";

import { Carousels } from "@/components/ui/carousel";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView>
      <SafeAreaView style={[{ backgroundColor: theme.background }]}>
        <Header />
        <Carousels />

        <View style={{ backgroundColor: "#363a4f" }}>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 400,
            }}
          />
          <View>
            <View>
              <ThemedText className="text-center mt-5">Trending</ThemedText>
            </View>
          </View>
          <Filters />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
