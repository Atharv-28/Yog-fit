import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Acc = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={[styles.user,styles.shadowProp]}>
      <TouchableOpacity
        style={styles.goProfile}
        onPress={() => navigateToScreen("PersonalProfile")}
      >
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.ag77IUhQeW_A-FQGcASMLAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7",
          }}
          style={[styles.image, styles.marg]}
        />
        <Text style={[styles.marg, styles.txt]}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.marg}
        onPress={() => navigateToScreen("Login")}
      >
        <Image
          style={styles.image2}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/8568/8568977.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    borderColor:"red",
    borderWidth:1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    height: 120,
    width: 350,
    borderRadius: 30,
    justifyContent: "space-around",
  },
  goProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  image2: {
    height: 50,
    width: 50,
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Acc;
