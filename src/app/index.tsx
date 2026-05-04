import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../input.css";

import { HeaderSearch } from "@/components/ui/header-search";
import { NowPlaying } from "@/components/ui/now-playing";
import { Trendings } from "@/components/ui/trending";
import { useTheme } from "@/hooks/use-theme";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";

import { Carousels } from "@/components/ui/carousel";
import { Upcoming } from "@/components/ui/upcoming";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: theme.background }]}>
        <HeaderSearch />
        <ScrollView>
        <Carousels />
        <View>
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
            <ThemedText className="text-center mt-5">Daily Trending</ThemedText>
          <Trendings />
          <ThemedText className="text-center">Now playing</ThemedText>
          <NowPlaying />
          <ThemedText className="text-center">Upcoming</ThemedText>
          <Upcoming />
        </View>
    </ScrollView>
      </SafeAreaView>
  );
}
