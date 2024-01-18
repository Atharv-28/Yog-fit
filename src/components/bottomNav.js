// BottomNav.js

import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.btm}>
      <Pressable style={styles.btm1} onPress={() => navigateToScreen("Home")}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
          }}
          style={styles.image2}
        />
      </Pressable>
      <Pressable
        style={styles.btm1}
        onPress={() => navigateToScreen("Profile")}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3564/3564995.png",
          }}
          style={styles.image2}
        />
      </Pressable>
      {/* Add similar onPress handlers for other tabs */}
    </View>
  );
};

const styles = StyleSheet.create({
  btm: {
    height: "7%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#cccffd",
  },
  image2: {
    height: 40,
    width: 40,
  },
});

export default BottomNav;
