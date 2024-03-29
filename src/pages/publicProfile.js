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
            <Text style={styles.txt}>Name :</Text>
            <Text style={styles.txt}>{user1.name}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Height :</Text>
            <Text style={styles.txt}>{user1.height}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Weight :</Text>
            <Text style={styles.txt}>{user1.weight}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Yog-fit Score :</Text>
            <Text style={styles.txt}>
              {user1.score > 0 ? user1.score : "0"}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.txt}>Birthdate :</Text>
            <Text style={styles.txt}>{user1.dob}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Gender :</Text>
            <Text style={styles.txt}>{user1.gender}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sv: {
    flexGrow: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
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
    marginTop: 15,
  },
  imgs: {
    height: 40,
    width: 40,
  },
  udtls: {
    alignItems: "center",
    height: 550,
    gap: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 30,
    // borderColor: "black",
    // borderWidth: 2,
    backgroundColor: "#a7d8e3",
  },
  pf: {
    height: 150,
    width: 150,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 35,
  },
  txt: {
    fontSize: 20,
    marginLeft: 5,
    // fontWeight:"bold",
  },
});
export default PublicProfile;
