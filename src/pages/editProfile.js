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
  const [editedName, setEditedName] = useState("");
  const [editedDob, setEditedDob] = useState("");
  const [editedWei, setEditedWei] = useState("");
  const [editedHei, setEditedHei] = useState("");

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
        weight: editedWei,
        height: editedHei,
    });
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
              onChangeText={setEditedName}
              placeholder={user ? user.name : "User Name"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Weight :</Text>
            <TextInput
              style={styles.txt1}
              onChangeText={setEditedWei}
              placeholder={user ? user.weight+"kg" : "Weight"}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Height :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                onChangeText={setEditedHei}
                placeholder={user ? user.height+"cm" : "Height"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Birthdate :</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.txt1}
                onChangeText={setEditedDob}
                placeholder={user ? user.dob : "DOB"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.butSC}
            onPress={handleSaveChanges}
          >
                <Text style={styles.butText}>Save Changes</Text>
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
    borderRadius: 20,
    backgroundColor: "orange",
    height: 45,
    width: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  butText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
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
