import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/pages/Dashboard";
import Login from "./src/pages/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard">
          {(props) => <Dashboard {...props} options={{ tabBarBadge: 3 }} />}
        </Tab.Screen>
        <Tab.Screen name="Login">
          {(props) => <Login {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
