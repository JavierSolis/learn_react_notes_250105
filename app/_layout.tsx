import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/*<Stack.Screen name="(1-conversor)" options={{ headerShown: false }} />*/}
      {/*<Stack.Screen name="(2-listas)" options={{ headerShown: false }} />*/}
    </Stack>
  );
}
