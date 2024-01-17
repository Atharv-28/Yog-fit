import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
const BottomNav = () => {
  return (
    <View style={styles.btm}>
      <View style={styles.btm1}>
        <Pressable
          style={styles.pr}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
            }}
            style={styles.image2}
          />
        </Pressable>
      </View>
      <View style={styles.btm1}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3564/3564995.png",
          }}
          style={styles.image2}
        />
      </View>
      <View style={styles.btm1}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/9232/9232100.png",
          }}
          style={styles.image2}
        />
      </View>
      <View style={styles.btm1}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/807/807313.png",
          }}
          style={styles.image2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btm: {
    borderColor: "green",
    borderWidth: 2,
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image2: {
    height: 40,
    width: 40,
  },
});
export default BottomNav;
