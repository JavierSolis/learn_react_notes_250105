import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#e91e63" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: () => (
            <MaterialIcons
              color={"#202ae5"}
              size={20}
              name="access-time-filled"
            />
          ),
        }}
      />
      <Tabs.Screen name="about" />
    </Tabs>
  );
}
