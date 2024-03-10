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
import { getDatabase, ref, onValue, update } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const EditProfile = () => {
  const navigation = useNavigation();
  const auth = getAuth(firebaseApp);
  const database = getDatabase();

  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedDob, setEditedDob] = useState("");

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
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, database]);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleSaveChanges = async () => {
    try {
      await updateUserData({
        name: editedName,
        dob: editedDob,
        // Add more attributes as needed
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Error saving changes:", error.message);
    }
  };

  const updateUserData = async (updatedData) => {
    try {
      const userRef = ref(database, `users/${auth.currentUser.uid}`);
      await update(userRef, updatedData);
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigateToScreen("PersonalProfile")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/189/189254.png",
              }}
              style={styles.icon}
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
              placeholder={user ? user.name : "User Name"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Email-id :</Text>
            <TextInput
              style={styles.txt1}
              placeholder={user ? user.email : "Email-id"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Birthdate :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                placeholder={user ? user.dob : "DOB"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Gender :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                placeholder={user ? user.gender : "Gender"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.butSC}>
            <Text>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    marginTop: 15,
  },
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    marginLeft: 10,
    marginRight: 10,
  },safeArea: {
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

  icon: {
    height: 40,
    width: 40,
  },
  topnv: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
  butSC:{
    borderRadius: 30,
    backgroundColor: "Orange",
    height: 45,
    borderWidth: 2,
    width: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

export default EditProfile;
