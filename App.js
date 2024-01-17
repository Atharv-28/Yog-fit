import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Profile from "./src/pages/profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/home";
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
