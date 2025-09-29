import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      {/*<Stack.Screen name="(1-conversor)" options={{ headerShown: false }} />*/}
      {/*<Stack.Screen name="(2-listas)" options={{ headerShown: false }} />*/}
    </Stack>
  );
}
