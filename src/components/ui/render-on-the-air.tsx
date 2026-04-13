import Tv from "@/interface/tv";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { LinearGradient } from "expo-linear-gradient";
type Props = {
    item: Tv
}

export const RenderOnTheAir: React.FC<Props> = React.memo(({ item }) => {
  return (
    <ThemedView className="items-center" style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
              alt={item.name}
      />
      <ThemedText type="link" className="text-center" style={styles.title} numberOfLines={2}>
              {item.name}
            </ThemedText>
          </ThemedView>
  );
});

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
    width: 90,
    fontWeight: "bold",
  },
});
