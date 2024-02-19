import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import calculateYogFitScore from "../utils/score";


const Analytic = ({ route }) => {
  const { stat } = route.params;

  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const timexp = 5;
  const timesp = 4;
  const timeper = (timesp / timexp) * 100;
  const accuracy = parseInt(stat[0].score1) ;
  const streak = parseInt(stat[0].streak1) ;
  const yogfitScore = ((accuracy+timeper)/200)*100+streak

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <TouchableOpacity onPress={() => navigateToScreen("Home")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/189/189254.png",
            }}
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.anlys}>
          <View style={styles.tl}>
            <Text style={styles.txt}>{stat[0].title1}</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Accuray :</Text>
            <Text style={styles.d1}>{stat[0].score1}</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>TimeSpent :</Text>
            <Text style={styles.d1}>4 min/day</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Excepted Time :</Text>
            <Text style={styles.d1}>5 min/day</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Time Percentage :</Text>
            <Text style={styles.d1}>{timeper}%</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Streak :</Text>
            <Text style={styles.d1}>{stat[0].streak1} days🔥</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Yog-Fit Score :</Text>
            <Text style={styles.d1}>{yogfitScore}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    marginLeft: 10,
    marginRight: 10,
  },
  img: {
    marginTop: 10,
    height: 50,
    width: 50,
  },
  tl: {
    alignItems: "center",
  },
  txt: {
    textAlign: "center",
    fontSize: 30,
    borderWidth: 2,
    width: 200,
    borderRadius: 8,
    backgroundColor: "orange",
    color: "white",
    borderColor: "orange",
  },
  anlys: {
    flexDirection: "column",
    alignItems: "center",
  },
  data: {
    flexDirection: "row",
    gap: 30,
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },

  d1: {
    fontSize: 20,
  },
});
export default Analytic;
