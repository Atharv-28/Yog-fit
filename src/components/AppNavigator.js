// AppNavigator.js
import Ranking from "../pages/rank";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Profile from "../pages/profile";
import BottomNav from "./bottomNav";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        options={{ headerShown: false }}
        tabBar={() => <BottomNav />}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Ranking"
          component={Ranking}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
