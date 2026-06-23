import { RenderDetailMovie } from "@/components/detail/render-detail-movie";
import { DetailHeader } from "@/components/ui/detail-header";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../input.css";
export default function DetailMovie() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.background, marginBottom: 10 }]}
    >
      <DetailHeader />
      <ScrollView>
        <RenderDetailMovie />
      </ScrollView>
    </SafeAreaView>
  );
}
