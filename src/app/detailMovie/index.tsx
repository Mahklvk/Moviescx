import { ThemedText } from "@/components/themed-text";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/hooks/use-theme";
import { DetailHeader } from "@/components/ui/detail-header";
import { RenderDetailMovie } from "@/components/ui/renderer/render-detail-movie";
import "../../../input.css";
export default function DetailMovie() {
   const theme = useTheme();
  return (
    <SafeAreaView style={[{ backgroundColor: theme.background, marginBottom:10 }]}>
      <DetailHeader />
      <ScrollView>
      <RenderDetailMovie />
      
      </ScrollView>
    </SafeAreaView>
  );
}
