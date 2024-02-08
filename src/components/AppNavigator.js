// AppNavigator.js
import Ranking from "../pages/rank";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Profile from "../pages/profile";
import BottomNav from "./bottomNav";
import Tracker from "../pages/tracker";
import TemplatePage from "../pages/templatesPage";
import LoginScreen from "../pages/login";
import EYPage from "../pages/eyPage";
import CreateAccount from "../pages/createAccount";
import PersonalProfile from "../pages/personalProfile";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        options={{ headerShown: false }}
       // tabBar={() => <BottomNav />}
        tabBar={() => null}
        screenOptions={{tabBarStyle: {showLabel:false}}}
        // tabBarOptions={{showLabel:false}}
        initialRouteName="Login"
        
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={CreateAccount}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="TemplatesPage"
          component={TemplatePage}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Tracker"
          component={Tracker}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Ranking"
          component={Ranking}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="EYPage"
          component={EYPage}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="PersonalProfile"
          component={PersonalProfile}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;