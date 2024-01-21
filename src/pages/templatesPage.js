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
    <SafeAreaView>
      <TemplateSelector />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TemplatePage;
