// Podium.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Podium = ({ rankingData }) => {
  const renderPodium = () => {
    const topThree = rankingData.slice(0, 3);

    return topThree.map((item, index) => (
      <View
        key={item.id}
        style={[
          styles.podiumItem,
          index === 0 && styles.firstPlace,
          index === 1 && styles.secondPlace,
          index === 2 && styles.thirdPlace,
        ]}
      >
        <Text style={styles.podiumPosition}>{index + 1}</Text>
        <Text>{item.name}</Text>
        <Text>{item.score}</Text>
      </View>
    ));
  };

  const renderRemainingList = () => {
    const remainingItems = rankingData.slice(3);

    return remainingItems.map((item) => (
      <View key={item.id} style={styles.remainingItem}>
        <Text>{item.name}</Text>
        <Text>{item.score}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.podiumContainer}>
      <View style={styles.podium}>{renderPodium()}</View>
      <View style={styles.rest}>{renderRemainingList()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  podiumContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  podiumItem: {
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  podiumPosition: {
    fontSize: 18,
    fontWeight: "bold",
  },
  firstPlace: {
    backgroundColor: "gold",
    height: "80%",
  },
  secondPlace: {
    backgroundColor: "silver",
    height: "60%",
  },
  thirdPlace: {
    backgroundColor: "#cd7f32",
    height: "40%",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  remainingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  podium: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
    height: 240,
  },
  rest: {},
});

export default Podium;
