import { Authentication } from "@/api/auth";
import { ThemedText } from "@/components/themed-text";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Linking, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Movies() {
  const [requestToken, setRequestToken] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const { mutate: getToken, isPending } = useMutation({
    mutationFn: () => Authentication.GetRequestToken(),
    onSuccess: (data) => {
      const token = data.request_token;
      Linking.openURL(
        `https://www.themoviedb.org/authenticate/${token}?redirect_to=moviesc://movie`,
      );
    },
  });
  const createSession = async (token: string) => {
    const res = await Authentication.CreateSession(token);
    return res.session_id;
  };
  useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      if (event.url.includes("auth") && requestToken) {
        try {
          const session = await createSession(requestToken);
          setSessionId(session);
        } catch (err) {
          console.log("Create session error:", err);
        }
      }
    };

    const sub = Linking.addEventListener("url", handleDeepLink);

    return () => sub.remove();
  }, [requestToken]);
  const { data: account, isLoading: loadingAccount } = useQuery({
    queryKey: ["account", sessionId],
    queryFn: () => Authentication.GetAccount(sessionId!),
    enabled: !!sessionId, // hanya jalan kalau sudah login
  });
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        {!sessionId && (
          <TouchableOpacity onPress={() => getToken()}>
            <ThemedText>{isPending ? "Loading..." : "Login TMDB"}</ThemedText>
          </TouchableOpacity>
        )}

        {loadingAccount && <ThemedText>Loading account...</ThemedText>}

        {account && (
          <View>
            <ThemedText>Username: {account.username}</ThemedText>
            <ThemedText>ID: {account.id}</ThemedText>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
