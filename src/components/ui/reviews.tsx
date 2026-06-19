import { ThemedText } from "@/components/themed-text";
import { Results } from "@/interface/reviews";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { RenderReviews } from "./renderer/render-reviews";

type Props = {
  review: Results[];
};

const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

export const Reviews: React.FC<Props> = React.memo(({ review }) => {
 if (!review || review.length === 0) {
  return (
    <View style={styles.emptyContainer}>
      <FontAwesome6
        name="message"
        size={40}
        color="#1483ff"
      />

      <ThemedText style={styles.emptyTitle}>
        No Reviews Yet
      </ThemedText>
    </View>
  );
}

  return (
    <FlatList
  data={review}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <RenderReviews review={item} />
  )}
/>
  );
});

const styles = StyleSheet.create({
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