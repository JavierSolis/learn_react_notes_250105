import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "tomato",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Fetch",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cloud-download" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="axios_screen"
        options={{
          title: "Axios",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cloud-download" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tanstack_screen"
        options={{
          title: "TansStack",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cloud-download" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cache_demo"
        options={{
          title: "Cache Demo",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="memory" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
