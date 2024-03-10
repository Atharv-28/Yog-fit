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
          <TouchableOpacity onPress={() => navigateToScreen("Profile")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/189/189254.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5972/5972963.png",
            }}
            style={styles.icon}
          />
        </View>

        <View style={styles.userDetails}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
            }}
            style={styles.profileImage}
          />
          <View style={styles.container}>
            <Text style={styles.label}>Username :</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={editedName}
                onChangeText={setEditedName}
              />
            ) : (
              <Text style={styles.info}>{user ? user.name : "User Name"}</Text>
            )}
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>Birthdate :</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={editedDob}
                onChangeText={setEditedDob}
              />
            ) : (
              <Text style={styles.info}>{user ? user.dob : "DOB"}</Text>
            )}
          </View>
          {/* Repeat the above pattern for other attributes */}
          <Text style={styles.changePassword} onPress={() => console.log("Change Password")}>
            Change Password ?
          </Text>
        </View>

        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
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
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 40,
    width: 40,
  },
  userDetails: {
    alignItems: "center",
    gap: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  container: {
    gap: 5,
  },
  label: {
    fontSize: 15,
    marginLeft: 5,
  },
  info: {
    width: 250,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  changePassword: {
    fontSize: 20,
    color: "orange",
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditProfile;
