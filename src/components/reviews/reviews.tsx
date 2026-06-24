import { ThemedText } from "@/components/themed-text";
import { Results } from "@/interface/reviews";
import { Feather } from '@react-native-vector-icons/feather';
import React from "react";
import {
  FlatList,
  StyleSheet,
  View
} from "react-native";
import { RenderReviews } from "./render-reviews";

type Props = {
  review: Results[];
};

const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

export const Reviews: React.FC<Props> = React.memo(({ review }) => {
  if (!review || review.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Feather name="message-square" size={40} color="#1483ff" />

        <ThemedText style={styles.emptyTitle}>No Reviews Yet</ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      {review.map((item) => (
        <RenderReviews key={item.id.toString()} review={item} />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    marginVertical:20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "600",
  },

  emptySubtitle: {
    marginTop: 6,
    fontSize: 14,
    opacity: 0.7,
    textAlign: "center",
  },
});
