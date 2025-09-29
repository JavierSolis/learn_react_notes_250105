import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="flat-list" />
      <Stack.Screen name="section-list" />
    </Stack>
  );
}
