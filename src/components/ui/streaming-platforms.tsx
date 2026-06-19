import { ThemedText } from "@/components/themed-text";
import { Provider } from "@/interface/streaming";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

type Props = {
  providers: Provider[];
  title?: string;
};

const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

export const StreamingPlatforms: React.FC<Props> = React.memo(
  ({ providers, title }) => {
    if (!providers || providers.length === 0) return null;

    return (
      <View style={styles.section}>
        {title && (
          <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
        )}
        <FlatList
          data={providers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.provider_id}-${index}`}
          renderItem={({ item }) => {
            const image = item.logo_path
              ? `${IMAGE_URL}${item.logo_path}`
              : null;

            return (
              <View style={styles.card}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.image} />
                ) : (
                  <View style={styles.placeholder} />
                )}
                <ThemedText style={styles.name} numberOfLines={2}>
                  {item.provider_name}
                </ThemedText>
              </View>
            );
          }}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.6,
    marginLeft: 10,
    marginBottom: 6,
  },
  card: {
    width: 80,
    marginRight: 12,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  placeholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },
  name: {
    marginTop: 6,
    fontSize: 11,
    textAlign: "center",
  },
});