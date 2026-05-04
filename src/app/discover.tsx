import { DiscoverMovie } from "@/components/ui/discover-movie";
import { HeaderNoSearch } from "@/components/ui/header-no-search";
import { SearchMovies } from "@/components/ui/search";
import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Discovery() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: theme.background }]}>
      <HeaderNoSearch />
      <SearchMovies />
      <DiscoverMovie />
      <View className="d-flex"></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 20,
    borderColor: "#a6da95",
    borderWidth: 2,
  },
  poster: {
    width: 150,
    height: 200,
  },
  title: {
    width: 140,
    fontWeight: "bold",
  },
});
