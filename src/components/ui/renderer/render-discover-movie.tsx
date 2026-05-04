import Genre from "@/interface/genre";
import Movie from "@/interface/movies";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../../themed-text";
import { ThemedView } from "../../themed-view";
import { Genres } from "../genre";
import CardSkeleton from "../skeleton";

type Props = {
  item: Movie;
  genres: Genre[];
  isLoading?: boolean;
};
export const RenderDiscoverMovie: React.FC<Props> = React.memo(
  ({ item, genres, isLoading }) => {
    if (isLoading) {
      return <CardSkeleton type="trending" />;
    }

    return (
      <ThemedView className="m-5 border-2 border-[#89b4fa] rounded-xl" style={styles.container}>
        <View className="absolute top-2 left-2 z-40">
          <TouchableOpacity>
            <Feather name="bookmark" size={34} color={"#89b4fa"} />
          </TouchableOpacity>
        </View>

        <View className="absolute right-[-10px] z-40">
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
        <View className="items-center">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={styles.poster}
            alt={item.title}
          />
          <ThemedText style={styles.title} numberOfLines={2}>
            {item.title}
          </ThemedText>
          <Genres genres={genres} item={item} />
        </View>
      </ThemedView>
    );
  },
);

const styles = StyleSheet.create({
  poster: {
    width: 150,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    width: 140,
    fontWeight: "bold",
    textAlign: "center",
  },

  container: {
    width:155
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
});
