import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PublicProfile = ({ route }) => {
  const { item } = route.params;

  const user1 = item;
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView style={styles.sv}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topnv}>
          <TouchableOpacity onPress={() => navigateToScreen("Profile")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/189/189254.png",
              }}
              style={styles.imgs}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10423/10423381.png",
            }}
            style={styles.imgs}
          />
        </View>

        <View style={styles.udtls}>
          <Image source={{ uri: user1.img }} style={styles.pf} />
          <View style={styles.container}>
            <Text style={styles.txt}>Username :</Text>
            <Text style={styles.txt1}>{user1.username}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Score :</Text>
            <Text style={styles.txt1}>{user1.score}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Birthdate :</Text>
            <Text style={styles.txt1}>{user1.birthDate}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Gender :</Text>
            <Text style={styles.txt1}>{user1.gender}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    marginLeft: 10,
    marginRight: 10,
  },
  sv: {
    flexGrow: 1,
  },
  container: {
    // flexDirection:"row"
    gap: 5,
  },
  container1: {
    flexDirection: "row",
    gap: 5,
    marginLeft: -15,
  },
  imgs: {
    height: 40,
    width: 40,
  },
  topnv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgs: {
    height: 40,
    width: 40,
  },
  udtls: {
    alignItems: "center",
    gap: 20,
  },
  pf: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  txt: {
    fontSize: 15,
    marginLeft: 5,
    // fontWeight:"bold",
  },
  txt1: {
    width: 250,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    textAlignVertical: "center",
  },
});
export default PublicProfile;
