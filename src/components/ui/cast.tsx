import { ThemedText } from "@/components/themed-text";
import { Cast } from "@/interface/cast";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

type Props = {
  cast: Cast[];
};

const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

export const CastBadges: React.FC<Props> = React.memo(({ cast }) => {
  if (!cast || cast.length === 0) return null;

  return (
    <View style={styles.container}>
      <FlatList
        data={cast}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const image = item.profile_path
            ? `${IMAGE_URL}${item.profile_path}`
            : null;

          return (
            <View style={styles.card}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  className="rounded-full"
                />
              ) : (
                <View style={styles.placeholder} className="rounded-full">
                  <FontAwesome6
                    name="circle-user"
                    size={170}
                    color="white"
                  />
                </View>
              )}

              <ThemedText style={styles.name} numberOfLines={1}>
                {item.name}
              </ThemedText>

              {item.character ? (
                <ThemedText
                  type="small"
                  style={styles.character}
                  numberOfLines={1}
                >
                  {item.character}
                </ThemedText>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  card: {
    width: 150,
    marginRight: 10,
    alignItems: "center",
  },

  image: {
    width: 170,
    height: 170,
  },

  placeholder: {
    width: 170,
    height: 170,
    backgroundColor: "#b4befe",
  },

  name: {
    fontSize: 13,
    textAlign: "center",
  },

  character: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: "center",
  },
});
