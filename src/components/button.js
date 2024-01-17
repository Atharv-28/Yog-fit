import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
const SquareComponents = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 15,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "green",
      }}
    >
      <View style={styles.pf1}>
        <View style={styles.spf1}></View>
        <View style={styles.spf1}></View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  pf: {
    width: "100%",
    alignItems: "center",
  },
  pf1: {
    borderColor: "purple",
    borderWidth: 2,
    height: 80,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  spf1: {
    height: 60,
    width: "40%",
    borderColor: "yellow",
    borderWidth: 2,
  },
});
export default SquareComponents;
