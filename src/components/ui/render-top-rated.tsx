import Tv from "@/interface/tv";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
    item: Tv
}

export const RenderTopRated: React.FC<Props> = React.memo(({ item }) => {
  return (
    <ThemedView className="items-center">
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
                {item.name}
              </ThemedText>
    
              <ThemedText style={{ color: "white", fontSize: 14 }}>
                ⭐ {item.vote_average.toFixed(1)} / 10
              </ThemedText>
            </View>
          </ThemedView>
  );
});

const styles = StyleSheet.create({
  backdrop: {
    width: 400,
    height: 300,
  },
});
