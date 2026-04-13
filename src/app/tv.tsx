import { View, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Header } from '@/components/ui/header';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { useQuery } from '@tanstack/react-query';
import { Television } from '@/api/television';
import Tv from '@/interface/tv';
import Movie from '@/interface/movies';
import { RenderOnTheAir } from '@/components/ui/render-on-the-air';
import React from "react";
import { useCallback } from 'react';

export default function Televisions() {
  const theme = useTheme();  

  const { data: onTheAir = [] } = useQuery({
      queryKey: ["onTheAir"],
      queryFn: Television.onTheAir,
      select: (data) => data.results,
      staleTime: 1000 * 60 * 10,
    });
  
    const renderOnTheAir = useCallback(({ item }: { item: Tv }) => {
      return <RenderOnTheAir item={item} />;
    }, []);
  return (
    <ScrollView>
      <SafeAreaView style={[{ backgroundColor: theme.background }]}>
        <View>
        <Header />
        </View>
        <View className='mt-5'>
          <View style={{ flexDirection: "row", margin: 8, alignItems: "center", justifyContent:'space-between'}}>
        <ThemedText>On The Air Today</ThemedText>
        <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor: "transparent",
              borderColor: "#a6da95",
              borderWidth: 2,
            }}
          >
            <ThemedText
              style={{
                color: "#cad3f5",
              }}
            >
              See all
            </ThemedText>
          </TouchableOpacity>
        </View>
          <FlatList
        data={onTheAir}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOnTheAir}
        indicatorStyle="white"
        horizontal={true}
        initialNumToRender={2}
        removeClippedSubviews={true}
      />
        </View>
          </SafeAreaView>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 20,
    borderColor: "#a6da95",
    borderWidth: 2,
  },
  poster: {
    width: 150,
    height: 200,
  },
  title: {
    width: 140,
    fontWeight: "bold",
  },
});
