// Template Selector and object passer.js
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
import MyTemplate from "./myTemplate";
import AllTemplate from "./allTemplate";

const TemplateSelector = () => {
  const [activeTab, setActiveTab] = useState("myTemplate");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabButtons}>
          <TouchableOpacity
            style={[
              styles.tabs,
              activeTab === "myTemplate" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("myTemplate")}
          >
            <Text style={styles.tabButton}>My Templates</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabs,
              activeTab === "globalTemplates" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("globalTemplates")}
          >
            <Text style={styles.tabButton}>All Templates</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContent}>
          {activeTab === "globalTemplates" ? (
            <AllTemplate />
          ) : (
            <MyTemplate />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  tabButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    gap: 3,
    borderRadius: 30,
  },
  tabs: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
    height: 50,
    borderRadius: 30,
  },
  tabButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTab: {
    fontWeight: "bold",
    color: "blue",
    backgroundColor: "orange",
  },
  tabContent: {
    flex: 1,
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

export default TemplateSelector;
