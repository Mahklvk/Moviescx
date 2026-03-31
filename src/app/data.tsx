import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";

import { Trending } from "@/api/client";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Movie from "@/interface/movies";
import { FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Data() {
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

      // Sesuaikan dengan struktur response API Anda
      // Jika response: { data: [...] }
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
    <ThemedView style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <ThemedText style={styles.title}>{item.original_title}</ThemedText>
      <ThemedText>{item.vote_average}</ThemedText>
      <ThemedText>{item.genre_ids}</ThemedText>
    </ThemedView>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    alignItems: "center",
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
