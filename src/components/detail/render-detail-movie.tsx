import { apiMovie } from "@/api/movies";
import CircularRating from "@/components/circular-progress";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Genre from "@/interface/genre";
import MovieDetail from "@/interface/movie-detail";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Reviews } from "../reviews/reviews";
import { CastBadges } from "../ui/cast";
import { StreamingPlatforms } from "../ui/streaming-platforms";
type Props = {
  genres: Genre[];
  isLoading?: boolean;
};
export function RenderDetailMovie() {
  const { movie_id } = useLocalSearchParams();
  const [expandedText, setExpandedText] = useState(false);
  const id = Array.isArray(movie_id) ? movie_id[0] : movie_id;

  const {
    data: detailMovie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["detailMovie", id],
    queryFn: () => apiMovie.Detail(Number(id)),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
  const { data: cast } = useQuery({
    queryKey: ["credits", id],
    queryFn: () => apiMovie.Credits(Number(id)),
    staleTime: 1000 * 60 * 5,
  });
  const { data: genre } = useQuery<MovieDetail>({
    queryKey: ["movie-detail", id],
    queryFn: () => apiMovie.Detail(Number(id)),
  });
  const { data: watchProviders } = useQuery({
    queryKey: ["watch-providers", id],
    queryFn: () => apiMovie.WatchProviders(Number(id)),
    staleTime: 1000 * 60 * 5,
  });
  const { data: reviews } = useQuery({
    queryKey: ["review", id],
    queryFn: () => apiMovie.Reviews(Number(id)),
    staleTime: 1000 * 60 * 5,
  });

  const idProviders = watchProviders?.results.ID;
  if (isLoading) {
    return <ThemedText>Loading...</ThemedText>;
  }
  return (
    <View>
      <View className="relative">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`,
          }}
          style={styles.backdrop}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        />
      </View>

      <View className="flex-row p-4 absolute" style={styles.container}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`,
          }}
          style={styles.poster}
        />
        <View className="flex-1 ml-4 mb-3 justify-center">
          <CircularRating rating={detailMovie.vote_average} />
          <ThemedText style={styles.title}>{detailMovie.title}</ThemedText>
          <FlatList
            data={genre?.genres ?? []}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 6 }}
            renderItem={({ item }) => (
              <View style={styles.badge} className="rounded-full">
                <ThemedText type="small" style={styles.badgeText}>
                  {item.name}
                </ThemedText>
              </View>
            )}
          />
        </View>
      </View>

      <View className="px-4 mt-5">
        <ThemedText numberOfLines={expandedText ? undefined : 2}>
          {detailMovie.overview}
        </ThemedText>

        <TouchableOpacity onPress={() => setExpandedText(!expandedText)}>
          <ThemedText className="text-blue-400 mt-2">
            {expandedText ? "Read less" : "Read more"}
          </ThemedText>
        </TouchableOpacity>
      </View>
      <View>
        <ThemedText
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Casts
        </ThemedText>
        <CastBadges cast={cast?.cast ?? []} />

        {!watchProviders?.results?.ID && (
          <ThemedView>
            <ThemedText
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Streaming
            </ThemedText>
            <ThemedText style={{ fontSize: 12, opacity: 0.5, marginLeft: 10 }}>
              Tidak tersedia di Indonesia
            </ThemedText>
          </ThemedView>
        )}

        {idProviders && (
          <View style={{ margin: 10 }}>
            <ThemedText
              style={{ fontWeight: "bold", fontSize: 24, marginLeft: 10 }}
            >
              Streaming
            </ThemedText>

            <StreamingPlatforms
              providers={idProviders.flatrate ?? []}
              title="Stream"
            />
            <StreamingPlatforms
              providers={idProviders.rent ?? []}
              title="Sewa"
            />
            <StreamingPlatforms
              providers={idProviders.buy ?? []}
              title="Beli"
            />
          </View>
        )}
      </View>
      <ThemedText
        style={{
          fontWeight: "bold",
          fontSize: 24,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        Reviews
      </ThemedText>
      <Reviews review={reviews?.reviews ?? []} />
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    height: 300,
  },
  container: {
    top: 100,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    height: 150,
    width: "100%",
  },

  poster: {
    width: 135,
    height: 200,
    borderRadius: 5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  overview: {
    marginTop: 20,
    marginLeft: 10,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 4,
    marginTop: 4,
  },

  badge: {
    borderWidth: 1,
    borderColor: "#89b4fa",
    backgroundColor: "#1e2030",
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 30,
  },

  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
