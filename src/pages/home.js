import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
// import CircularProgress from "react-native-circular-progress-indicator";
import Card from "../components/card";
import BottomNav from "../components/bottomNav";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}></View>

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
    borderWidth: 2,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Home;
