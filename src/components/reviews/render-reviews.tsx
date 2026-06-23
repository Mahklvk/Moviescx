import { ThemedText } from "@/components/themed-text";
import { Results } from "@/interface/reviews";
import { Feather } from '@react-native-vector-icons/feather';
import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Props = {
  review: Results;
};

const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

export const RenderReviews: React.FC<Props> = React.memo(({ review }) => {

  const avatar = review.author_details?.avatar_path
    ? `${IMAGE_URL}${review.author_details.avatar_path}`
    : null;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Feather
              name="user"
              size={50}
              color="#d9d9d9"
            />
          </View>
        )}

        <View style={styles.authorInfo}>
          <ThemedText style={styles.authorName}>
            {review.author_details?.name || review.author}
          </ThemedText>

          <ThemedText style={styles.username}>
            @{review.author_details?.username}
          </ThemedText>
        </View>

        <View style={styles.ratingContainer}>
          <ThemedText style={styles.ratingLabel}>
            RATING
          </ThemedText>

          <ThemedText style={styles.rating}>
            {review.author_details?.rating ?? "-"}
          </ThemedText>
        </View>
      </View>

      <ThemedText numberOfLines={6} style={styles.content}>
        {review.content}
      </ThemedText>

      <View style={styles.footer}>
        <ThemedText style={styles.date}>
          {review.created_at}
        </ThemedText>

        <ThemedText style={styles.date}>
          {review.updated_at}
        </ThemedText>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    padding: 16,
    borderWidth: 2,
    borderColor: "#1483ff",
    borderRadius: 20,
    backgroundColor: "#122347",
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
  },

  authorInfo: {
    flex: 1,
    marginLeft: 12,
  },

  authorName: {
    fontSize: 22,
    fontWeight: "700",
  },

  username: {
    fontSize: 18,
    opacity: 0.6,
  },

  ratingContainer: {
    alignItems: "flex-end",
  },

  ratingLabel: {
    fontSize: 14,
    opacity: 0.7,
  },

  rating: {
    fontSize: 24,
    fontWeight: "bold",
  },

  content: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 24,
  },

  seeMore: {
    marginTop: 6,
    textDecorationLine: "underline",
  },

  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  date: {
    fontSize: 13,
    opacity: 0.7,
  },
});