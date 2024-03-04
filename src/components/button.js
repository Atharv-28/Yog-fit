import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
const SquareComponents = () => {
  return (
    <View style={styles.pf1}>
      <View style={styles.spf1}>
        <Text style={styles.text}>About Us</Text>
      </View>
      <View style={styles.spf1}>
        <Text style={styles.text}>FeedBack</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pf1: {
    height: 80,
    backgroundColor: "#d2e4f2",
    width: "90%",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  spf1: {
    height: 60,
    width: "40%",
    backgroundColor:"white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
export default SquareComponents;
