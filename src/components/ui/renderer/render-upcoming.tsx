import Genre from "@/interface/genre";
import Movie from "@/interface/movies";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../../themed-text";
import { ThemedView } from "../../themed-view";
import { Genres } from "../genre";
import CardSkeleton from "../skeleton";
type Props = {
  item: Movie;
  genres: Genre[];
  isLoading?: boolean;
};

export const RenderUpcoming: React.FC<Props> = React.memo(
  ({ genres, item, isLoading }) => {
    if (isLoading) {
      return <CardSkeleton type="upcoming" />;
    }
    return (
      <ThemedView className="items-center" style={styles.card}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.poster}
          alt={item.title}
        />
        <ThemedText
          type="link"
          className="text-center my-2"
          style={styles.title}
          numberOfLines={1}
        >
          {item.title}
        </ThemedText>
        <View style={styles.overview} className="border-t-2 border-[#89b4fa]">
          <ThemedText
            type="small"
            numberOfLines={2}
            className="text-justify me-5 ms-5"
          >
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
  overview: {
    width: 150,
  },
});
