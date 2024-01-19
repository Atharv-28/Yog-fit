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
            uri: "https://cdn-icons-png.flaticon.com/128/553/553416.png",
          }}
          style={styles.image2}
        />
      </Pressable>
      <Pressable style={styles.btm1} onPress={() => navigateToScreen("Home")}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/2906/2906496.png",
          }}
          style={styles.image2}
        />
      </Pressable>
      <Pressable
        style={styles.btm1}
        onPress={() => navigateToScreen("Ranking")}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/2817/2817958.png",
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
            uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
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
  },
  image2: {
    height: 40,
    width: 40,
  },
});

export default BottomNav;
