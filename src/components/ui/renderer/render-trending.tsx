import Movie from "@/interface/movies";
import Tv from "@/interface/tv";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "../../themed-text";
import { ThemedView } from "../../themed-view";

type Media = Movie | Tv;

type Props = {
  item: Media;
};

export const RenderTrending: React.FC<Props> = React.memo(({ item }) => {
  return (
    <ThemedView className="items-center" style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
        alt={"original_title" in item ? item.title : item.name}
      />
      <ThemedText type="link" className="text-center" style={styles.title}>
        {"original_title" in item ? item.title : item.name}
      </ThemedText>
    </ThemedView>
  );
});

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 20,
    borderColor: "#89b4fa",
    borderWidth: 2,
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
