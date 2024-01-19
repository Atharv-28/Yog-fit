// TabsComponent.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FriendsComponent from "./FriendsComponent";
import SearchComponent from "./SearchComponent";
import { friends } from "../utils/friends";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("search"); // 'search' or 'friends'

  const renderComponent = () => {
    if (activeTab === "search") {
      return <SearchComponent />;
    } else if (activeTab === "friends") {
      return <FriendsComponent />;
    }
    // Add more cases for additional tabs

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabButtons}>
        <TouchableOpacity onPress={() => setActiveTab("search")}>
          <Text
            style={[
              styles.tabButton,
              activeTab === "search" && styles.activeTab,
            ]}
          >
            Search
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
        {/* Add more TouchableOpacity buttons for additional tabs */}
      </View>

      <View style={styles.tabContent}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
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
  },
});

export default TabsComponent;
