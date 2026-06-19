import Movie from "@/interface/movies";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ThemedText } from "../../themed-text";
import { ThemedView } from "../../themed-view";
import CardSkeleton from "../skeleton";
import { useRouter } from "expo-router";
type Props = {
  item: Movie;
  isLoading?: boolean;
};

export const RenderTopRated: React.FC<Props> = React.memo(
  ({ item, isLoading }) => {
    if (isLoading) {
      return <CardSkeleton type="carousel" />;
    }
    const handlePress = (movie_id: number) => {
      router.push(`/detailMovie?movie_id=${movie_id}`);
    };

    const router = useRouter();
    return (
      <ThemedView className="items-center">
         <TouchableOpacity onPress={() => handlePress(item.id)}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
          }}
          style={styles.backdrop}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
          }}
        >
          <ThemedText
            style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
          >
            {item.title}
          </ThemedText>

          <ThemedText style={{ color: "white", fontSize: 14 }}>
            ⭐ {item.vote_average.toFixed(1)} / 10
          </ThemedText>
          </View>
          </TouchableOpacity>
      </ThemedView>
    );
  },
);

const styles = StyleSheet.create({
  backdrop: {
    width: 400,
    height: 150,
    borderRadius: 10,
  },
});
