import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import Movie from "@/interface/movies";
import Genre from "@/interface/genre";

type Props = {
  item: Movie;
  genres: Genre[];
};

export const Genres: React.FC<Props> = React.memo(({ item, genres }) => {
  if (!item?.genre_ids || !genres?.length) return null;

  const genreMap = useMemo(() => {
    const map: Record<number, string> = {};

    genres.forEach((g) => {
      map[Number(g.id)] = g.name;
    });

    return map;
  }, [genres]);

  return (
    <View style={styles.genreContainer}>
      {item.genre_ids.slice(0, 1).map((id) => {
        const name = genreMap[Number(id)];

        if (!name) return null;

        return (
          <View key={id} style={styles.badge}>
            <ThemedText type="small" style={styles.badgeText}>
              {name}
            </ThemedText>
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
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
    borderRadius: 999, // ganti className rounded-full
  },

  badgeText: {
    fontSize: 10,
  },
});