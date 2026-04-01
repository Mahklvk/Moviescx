import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../input.css";

import { Trending } from "@/api/client";
import Movie from "@/interface/movies";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Header } from "@/components/ui/header";
import { useTheme } from "@/hooks/use-theme";
import { RenderTrending } from "@/components/ui/render-trending";

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchMovies();
    }, []),
  );

  const fetchMovies = async () => {
    try {
      // setIsLoading(true);
      const response = await Trending.Movies();
      
      const movies = response.results;

      setMovies(movies);
    } catch (error) {
      console.error("Fetch quizzes error:", error);
      // Alert.alert('Error', 'Gagal memuat data quiz');
    } finally {
      // setIsLoading(false);
    }
  };

  const renderTrending = ({ item }: { item: Movie }) => (
  <RenderTrending item={item} />
);
  const theme = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: theme.background }]}>
      <Header />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem= {renderTrending}
        className="px-5"
        horizontal={true}
        initialNumToRender={2}
        removeClippedSubviews={true}
      />

    </SafeAreaView>
  );
}
