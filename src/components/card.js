import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import generateUniqueColors from "../utils/generateUniqueColors";
import SmallTab from "./smallTab";
import { useNavigation } from "@react-navigation/native";


const card = ({ color, score, title, streak, diff}) => {
  const info = [
    {
      score1: score,
      title1: title,
      streak1: streak,
      diff1: diff,
    },
  ];
  const navigation = useNavigation();

    const navigateToScreen = (screenName, info) => {
        navigation.navigate(screenName, { stat : info });
      };
  return (
      <TouchableOpacity onPress={() => navigateToScreen("Analytic", info)} style={[styles.card, { backgroundColor: color }]}>
        <View style={styles.cardLeft}>
          <View style={styles.ex}>
            <Text style={styles.e2}>{title}</Text>
          </View>
          <SmallTab streak={streak} diff={diff} />
        </View>
        <View style={styles.accuracy}>
          <CircularProgress
            progressValueColor={"black"}
            circleBackgroundColor={color}
            activeStrokeColor="#ffb366"
            activeStrokeWidth={15}
            value={score}
            radius={55}
            width={10}
          />
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image2: {
    height: 40,
    width: 40,
  },
  div: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  card: {
    borderRadius: 30,
    height: 180,
    width: 350,
    flex: 0.1,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sdiv1: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "red",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardLeft: {
    borderRadius: 30,
    height: 120,
    width: "55%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  e2: {
    fontSize: 23,
    marginLeft: 5,
    fontWeight: "bold",
  },

  accuracy: {
    flexDirection: "row",
    height: 180,
    alignItems: "center",
  },
});

export default card;
