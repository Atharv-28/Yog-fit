import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Profile from "./src/pages/profile";
import Home from "./src/pages/home";
import BottomNav from "./src/components/bottomNav";

const App = () => {
  return (
    <SafeAreaView style={styles.home}>
      <Home />
      <BottomNav style={styles.nav} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    height: "92%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  nav: {
    flex: 0.2,
    borderColor: "blue",
  },
});

export default App;
