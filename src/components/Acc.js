import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const Acc = () => {
  return (
    <View style={styles.user}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.ag77IUhQeW_A-FQGcASMLAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7",
        }}
        style={[styles.image, styles.marg]}
      />
      <Text style={[styles.marg, styles.txt]}>User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    height: 120,
    width: 350,
    borderRadius: 30,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  marg: {
    marginLeft: 30,
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Acc;
