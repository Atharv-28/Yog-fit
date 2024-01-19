import { Text, View, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";

const smallTab = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.tabs}>Beginer</Text>
        <Text style={styles.tabs}>7 days 🔥</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tabs: {
    marginRight: 10,
    color: "black",
    height: 30,
    fontSize: 14,
    width: 80,
    backgroundColor: "#ffb366",
    borderRadius: 50,
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default smallTab;
