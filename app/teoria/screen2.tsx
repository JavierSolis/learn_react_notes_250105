import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Screen2() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola de screen 2</Text>
      <Button title="Screen 2 - Volver" onPress={() => router.back()} />
    </View>
  );
}
