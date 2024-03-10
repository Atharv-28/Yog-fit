import React, { useState, useEffect } from "react";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const PersonalProfile = () => {
  const navigation = useNavigation();
  const auth = getAuth(firebaseApp);
  const database = getDatabase();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const userRef = ref(database, `users/${authUser.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          console.log(userData);
          setUser(userData);
        });
      } else {
        // Handle the case when the user is not authenticated
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, database]);

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
          <TouchableOpacity onPress={() => navigateToScreen("EditProfile")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/5972/5972963.png",
              }}
              style={styles.img}
            />
          </TouchableOpacity>
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
            <TextInput
              style={styles.txt1}
              editable={false}
              placeholder={user ? user.name : "User Name"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Email-id :</Text>
            <TextInput
              style={styles.txt1}
              editable={false}
              placeholder={user ? user.email : "Email-id"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Birthdate :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                editable={false}
                placeholder={user ? user.dob : "DOB"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Weight :</Text>
            <TextInput
              style={styles.txt1}
              placeholder={user ? user.weight+"kg" : "Weight"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Height :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                placeholder={user ? user.height+"cm" : "Height"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Gender :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                editable={false}
                placeholder={user ? user.gender : "Gender"}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.cp}>Change Password ?</Text>
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
    marginTop: 15,
  },
  container: {
    // flexDirection:"row"
    gap: 5,
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
    gap: 10,
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
  },
  cp: {
    fontSize: 20,
    color: "orange",
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
