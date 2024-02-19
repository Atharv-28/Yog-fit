// Podium.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Podium = ({ rankingData }) => {
  const sortedData = rankingData.slice().sort((a, b) => b.score - a.score);
  const renderPodium = () => {
    const topThree = sortedData.slice(0, 3);

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
        <Image style={styles.img} source={{ uri: item.img }} />
        <Text
          style={
            ({ flexWrap: "wrap" },
            { flexDirection: "column" },
            { textAlign: "center" })
          }
        >
          {item.username}
        </Text>
        <Text>{item.score}</Text>
      </View>
    ));
  };

  const renderRemainingList = () => {
    const remainingItems = sortedData.slice(3);

    return remainingItems.map((item) => (
      <View key={item.id} style={styles.remainingItem}>
        <Image style={styles.img} source={{ uri: item.img }} />
        <Text>{item.username}</Text>
        <Text>{item.score}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.podiumContainer}>
      <View style={styles.podium}>{renderPodium()}</View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        {renderRemainingList()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  podiumContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  podiumItem: {
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    gap: 5,
  },
  podiumPosition: {
    fontSize: 18,
    fontWeight: "bold",
  },
  firstPlace: {
    backgroundColor: "gold",
    height: "95%",
    width: 100,
  },
  secondPlace: {
    backgroundColor: "silver",
    height: "80%",
    width: 100,
  },
  thirdPlace: {
    backgroundColor: "#cd7f32",
    height: "65%",
    width: 100,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  remainingItem: {
    width: 250,
    borderRadius: 30,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    paddingVertical: 5,
    marginTop: 10,
  },
  podium: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
    height: 240,
  },
});

export default Podium;
