import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import SquareComponents from "../components/button";
import Acc from "../components/Acc";
import TabComponent from "../components/TabComponent";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Acc />
      <SquareComponents />
      <TabComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
});

export default Profile;
