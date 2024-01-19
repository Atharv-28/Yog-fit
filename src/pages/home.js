import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Card from "../components/card";
import Welcome from "../components/welcome";
import generateUniqueColors from "../utils/generateUniqueColors";

const Home = () => {
  const getNextColor = generateUniqueColors();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <Welcome style={styles.Welcome} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <Card color={getNextColor()} />
        <Card color={getNextColor()} />
        <Card color={getNextColor()} />
        <Card color={getNextColor()} />
        <Card color={getNextColor()} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffff",
  },
  Welcome: {
    height: 80,
    width: 300,
    flex: 0.1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Home;
