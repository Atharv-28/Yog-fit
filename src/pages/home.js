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
import BottomNav from "../components/bottomNav";
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
        <Card style={styles.card} score={30} color={getNextColor()} />
        <Card score={80} color={getNextColor()} />
        <Card score={75} color={getNextColor()} />
        <Card score={60} color={getNextColor()} />
        <Card score={90} color={getNextColor()} />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  card:{
    boxShadow: "0px 7px 29px 0px grey",
  },
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
