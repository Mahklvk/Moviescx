import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
export function DetailHeader() {
  const router = useRouter();
  return (
    <View className="px-5 py-4">
      <View className="flex-row items-center">
        <View>
          <TouchableOpacity onPress={() => router.back()} className="me-5">
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <ThemedText className="text-2xl font-bold text-gray-900">
            Detail Movie
          </ThemedText>
        </View>
      </View>
    </View>
  );
}
