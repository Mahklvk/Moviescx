import Movie from "@/interface/movies";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../../themed-text";
import { ThemedView } from "../../themed-view";
import { LinearGradient } from "expo-linear-gradient";
type Props = {
    item: Movie
}

export const RenderUpcoming: React.FC<Props> = React.memo(({ item }) => {
  return (
    <ThemedView className="items-center" style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
              alt={item.title}
      />
      <ThemedText type="link" className="text-center" style={styles.title}>
              {item.title}
            </ThemedText>
          </ThemedView>
  );
});

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 20,
    borderColor: "#89b4fa",
    borderWidth:2,
    borderRadius:10,
  },
  poster: {
    width: 150,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    width: 140,
    fontWeight: "bold",
  },
});
