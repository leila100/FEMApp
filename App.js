import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import ColorPalette from "./screens/colorPalette";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ColorPalette' component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
