import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../input.css";

import { Trending } from "@/api/client";
import Movie from "@/interface/movies";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";

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

  const renderItem = ({ item }: { item: Movie }) => (
    <ThemedView className="items-center" style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <ThemedText type="link" className="text-center" style={styles.title}>
        {item.original_title}
      </ThemedText>
    </ThemedView>
  );
  const theme = useTheme();

  return (
    <SafeAreaView style={[{ backgroundColor: theme.background }]}>
      <View className="sticky">
        <ThemedText className="text-center h-10 mb-2">Moviescx</ThemedText>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        className="px-5"
        horizontal={true}
        initialNumToRender={2}
        removeClippedSubviews={true}
      />
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
    fontWeight: 'bold',
  },
});
