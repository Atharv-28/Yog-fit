import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import BottomNav from "../components/bottomNav";
import TemplateSelector from "../components/templateSelector";

const TemplatePage = () => {
  return (
    <SafeAreaView style={styles.page}>
      <TemplateSelector />
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
  },
});

export default TemplatePage;
