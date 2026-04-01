import Movie from "@/interface/movies";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import React from "react";

type Props = {
  item: Movie;
};

export const RenderTrending: React.FC<Props> = ({ item }) => {
    return (
        <ThemedView className="items-center" style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.poster}
            />
            <ThemedText type="link" className="text-center" style={styles.title}>
                {item.original_title}
            </ThemedText>
            {/* <ThemedText>{item.vote_average}</ThemedText>
          <ThemedText>{item.genre_ids}</ThemedText> */}
        </ThemedView>
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
