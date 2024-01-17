import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.welt}>
      <Text>Welcome Back Shravan !!</Text>
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
    height: 50,
    width: 50,
  },
  welt: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Welcome;
