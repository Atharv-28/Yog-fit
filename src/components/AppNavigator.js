// AppNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Profile from "../pages/profile";
import BottomNav from "./bottomNav"; // Import your custom bottom navigation component

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
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
