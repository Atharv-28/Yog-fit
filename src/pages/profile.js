import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import SquareComponents from "../components/button";
import Acc from "../components/Acc";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Acc />
      <SquareComponents></SquareComponents>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Profile;
