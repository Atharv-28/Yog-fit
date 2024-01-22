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
import TemplateSelector from "../components/templateSelector";

const TemplatePage = () => {
  return (
    <SafeAreaView style={styles.page}>
      <TemplateSelector />
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
