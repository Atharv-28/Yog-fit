import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.welt}>
      <Text style={styles.Text}>Welcome Back Shravan !! </Text>
      <Image
        source={{
          uri: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  welt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
  },
});

export default Welcome;
