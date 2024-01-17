import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
// import CircularProgress from "react-native-circular-progress-indicator";
import Card from "../components/card";
import Welcome from "../components/welcome";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Welcome style={styles.Welcome} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          alignItems: "center",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
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
