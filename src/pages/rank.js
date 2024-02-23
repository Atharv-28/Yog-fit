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
import BottomNav from "../components/bottomNav";
import { friends as FriendsRankingData } from "../utils/friends";
import { users as globalRankingData } from "../utils/users";
import Podium from "../components/Podium";

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
  const [activeTab, setActiveTab] = useState("global");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabButtons}>
        <TouchableOpacity
            style={[
              styles.tabs,
              activeTab === "global" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("global")}
          >
            <Text style={styles.tabButton}>Global</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabs,
              activeTab === "friends" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("friends")}
          >
            <Text style={styles.tabButton}>Friends</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContent}>
          {activeTab === "global" ? (
            <Podium rankingData={globalRankingData} />
          ) : (
            <Podium rankingData={FriendsRankingData} />
          )}
        </View>
      </View>
      <BottomNav />
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
    flex:0.8,
    padding: 10,
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
