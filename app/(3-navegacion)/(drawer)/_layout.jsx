import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerInactiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
          drawerLabelStyle: { fontWeight: "bold", fontSize: 30 },
          drawerIcon: () => (
            <MaterialIcons name="home" size={30} color="black" />
          ),
          drawerLabel: "Home",
          title: "Index Drawer",
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerInactiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
          drawerLabel: "About",
          title: "About Drawer",
        }}
      />
    </Drawer>
  );
}
