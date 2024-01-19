// Rank.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import Podium from "../components/Podium";

const globalRankingData = [
  { id: 1, name: "User 1", score: 150 },
  { id: 2, name: "User 2", score: 120 },
  { id: 3, name: "User 3", score: 100 },
  { id: 4, name: "User 4", score: 90 },
  { id: 5, name: "User 5", score: 80 },
  // Add more global ranking data as needed
];

const friendsRankingData = [
  { id: 101, name: "Friend 1", score: 130 },
  { id: 102, name: "Friend 2", score: 110 },
  { id: 103, name: "Friend 3", score: 95 },
  { id: 104, name: "Friend 4", score: 85 },
  { id: 105, name: "Friend 5", score: 75 },
  // Add more friends ranking data as needed
];

const PodiumItem = ({ position, name, score }) => {
  const isTopThree = position <= 3;

  return (
    <View style={[styles.podiumItem, isTopThree && styles.topThree]}>
      <Text style={styles.podiumPosition}>{position}</Text>
      <Text>{name}</Text>
      <Text>{score}</Text>
    </View>
  );
};

const Rank = () => {
  const [activeTab, setActiveTab] = useState("global"); // 'global' or 'friends'

  //   const renderRanking = (rankingData) => (
  //     <View style={styles.rankingContainer}>
  //       {rankingData.map((item, index) => (
  //         <PodiumItem
  //           key={item.id}
  //           position={index + 1}
  //           name={item.name}
  //           score={item.score}
  //         />
  //       ))}
  //     </View>
  //   );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabButtons}>
          <TouchableOpacity onPress={() => setActiveTab("global")}>
            <Text
              style={[
                styles.tabButton,
                activeTab === "global" && styles.activeTab,
              ]}
            >
              Global
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("friends")}>
            <Text
              style={[
                styles.tabButton,
                activeTab === "friends" && styles.activeTab,
              ]}
            >
              Friends
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContent}>
          {activeTab === "global" ? (
            <Podium rankingData={globalRankingData} />
          ) : (
            <Podium rankingData={friendsRankingData} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  tabButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 30,
  },
  tabButton: {
    fontSize: 16,
  },
  activeTab: {
    fontWeight: "bold",
    color: "blue",
  },
  tabContent: {
    flex: 1,
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
  rankingContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    borderRadius: 30,
    borderColor: "blue",
    borderWidth: 2,
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
  topThree: {
    flex: 2, // Make the top three items taller
  },
});

export default Rank;
