import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(1-conversor)" options={{ headerShown: false }} />
    </Stack>
  );
}
