import Movie from "@/interface/movies";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ThemedText } from "../../themed-text";
import { ThemedView } from "../../themed-view";
import CardSkeleton from "../skeleton";
import { Genres } from "../genre";
import Genre from "@/interface/genre";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  item: Movie;
  genres: Genre[];
  isLoading?: boolean;
};

export const RenderNowPlaying: React.FC<Props> = React.memo(
  ({ genres, item, isLoading }) => {
    if (isLoading) {
      return <CardSkeleton type="nowPlaying"/>;
    }
    return (
      <ThemedView className="items-center" style={styles.card}>
        <View className="absolute top-2 left-2 z-40">
          <TouchableOpacity>
            <Feather name="bookmark" size={44} color={"#89b4fa"} />
          </TouchableOpacity>
        </View>

        <View className="absolute right-0 z-40">
          <View className="border border-[#89b4fa] rounded-full px-2 py-1 bg-[#b4befe]">
            <ThemedText
              style={{
                color: "#24273a",
              }}
            >
              {item.vote_average.toFixed(1)}
            </ThemedText>
          </View>
        </View>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
          style={styles.poster}
          alt={item.title}
        />
        <ThemedText type="link" className="text-center" style={styles.title} numberOfLines={1}>
          {item.title}
        </ThemedText>
        <View style={styles.overview} className="border-t-2 border-[#89b4fa]">
        <ThemedText type="small" numberOfLines={2} className="text-justify me-5 ms-5">
          {item.overview}
        </ThemedText>
        </View>
        <Genres genres={genres} item={item} />
      </ThemedView>
    );
  },
);

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 20,
    borderColor: "#89b4fa",
    borderWidth: 2,
    borderRadius: 10,
    width: "auto",
    height: 300,
  },
  poster: {
    width: 300,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    width: 300,
    fontWeight: "bold",
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
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 5,
  },

  badgeText: {
    fontSize: 10,
  },

  overview: {
    width: 300,
  }
});
