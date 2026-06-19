import { DiscoverMovie } from "@/components/ui/discover-movie";
import { HeaderNoSearch } from "@/components/ui/header-no-search";

import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Discovery() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: theme.background, flex: 1}]}>
      <HeaderNoSearch />
      <DiscoverMovie />
    </SafeAreaView>
  );
}
