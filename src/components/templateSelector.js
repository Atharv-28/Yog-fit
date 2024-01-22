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

import { exercises } from "../utils/exercise";

const allTemplates = [exercises];
const myTemplate = [];

const TemplateSelector = () => {
  const [activeTab, setActiveTab] = useState("myTemplate");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabButtons}>
          <TouchableOpacity onPress={() => setActiveTab("myTemplate")}>
            <Text
              style={[
                styles.tabButton,
                activeTab === "myTemplate" && styles.activeTab,
              ]}
            >
              My Templates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("globalTemplates")}>
            <Text
              style={[
                styles.tabButton,
                activeTab === "globalTemplates" && styles.activeTab,
              ]}
            >
              All Templates
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.tabContent}>
          {activeTab === "globalTemplates" ? (
            <Podium rankingData={allTemplates} />
          ) : (
            <Podium rankingData={myTemplate} />
          )}
        </View> */}
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

export default TemplateSelector;
