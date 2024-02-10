import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PublicProfile = () => {
  const [gender, setGender] = useState("");
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
              style={styles.img}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5972/5972963.png",
            }}
            style={styles.img}
          />
        </View>

        <View style={styles.udtls}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
            }}
            style={styles.pf}
          />
          <View style={styles.container}>
            <Text style={styles.txt}>Username :</Text>
            <Text style={styles.txt1}>JohnDoe</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Email-id :</Text>
            <Text style={styles.txt1}>johndoe@example.com</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Birthdate :</Text>
              <Text style={styles.datePicker}>Select Date</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.txt}>Gender :</Text>
                <Text>Female</Text>
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
  img: {
    height: 40,
    width: 40,
  },
  topnv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
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
    textAlignVertical: 'center',
  },
  cp: {
    fontSize: 20,
    color: "orange",
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginRight: 20,
  },
  radioButtonDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "orange",
    backgroundColor: "white",
    marginLeft: 5,
  },
  datePicker: {
    width: 250,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
});
export default PersonalProfile;
