import { useState } from "react";
import { FlatList, View } from "react-native";

import { useSearchMovies } from "@/hooks/use-search-movies";

import { Searchbar } from "react-native-paper";
import { ThemedText } from "../themed-text";
import { RenderSearch } from "./renderer/render-search";
import CardSkeleton from "./skeleton";

import { apiMovie } from "@/api/movies";
import { useQuery } from "@tanstack/react-query";

export function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState("");

    const { data, isLoading } = useSearchMovies(searchQuery);
    
    const { data: genreData } = useQuery({
    queryKey: ["genres",],
    queryFn: () => apiMovie.Genres(),
    staleTime: 1000 * 60 * 5, 
    });

  const movies = data?.results ?? [];

  const renderContent = () => {
    if (!searchQuery) {
      return null;
    }

    if (isLoading) {
      return (
        <FlatList
          data={Array(6).fill(null)}
          keyExtractor={(_, i) => i.toString()}
          numColumns={2}
          renderItem={() => <CardSkeleton type="trending" />}
          contentContainerStyle={{ padding: 16 }}
        />
      );
    }

    if (movies.length === 0) {
      return (
        <ThemedText style={{ textAlign: "center", marginTop: 20 }}>
          No results
        </ThemedText>
      );
    }

    return (
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <RenderSearch item={item} genres={genreData?.genres} />
        )}
      />
    );
  };

  return (
    <View>
      <Searchbar
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ margin: 16 }}
      />
      {renderContent()}
    </View>
  );
}
