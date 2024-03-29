// TabsComponent.js on profile page
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FriendsComponent from "./FriendsComponent";
import SearchComponent from "./SearchComponent";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("search"); // 'search' or 'friends'

  const renderComponent = () => {
    if (activeTab === "search") {
      return <SearchComponent />;
    } else if (activeTab === "friends") {
      return <FriendsComponent />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabButtons}>
        <TouchableOpacity style={styles.tabsEach} onPress={() => setActiveTab("search")}>
          <Text
            style={[
              styles.tabButton,
              activeTab === "search" && styles.activeTab,
            ]}
          >
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsEach} onPress={() => setActiveTab("friends")}>
          <Text
            style={[
              styles.tabButton,
              activeTab === "friends" && styles.activeTab,
            ]}
          >
            Friends
          </Text>
        </TouchableOpacity>
        {/* Add more TouchableOpacity buttons for additional tabs */}
      </View>

      <View style={styles.tabContent}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: 350,
    padding:10,
    backgroundColor:"#CAE0ED",
    borderRadius:30,
  },
  tabButtons: {
    width: 200,
    height: 50,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  tabButton: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
  },
  tabsEach:{
    width: 100,
  },
  activeTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor:"orange",
    borderRadius: 30,
  },
  tabContent: {
    flex: 1,
    padding: 10,
  },
});

export default TabsComponent;
