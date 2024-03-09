import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebaseApp } from "../../database/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database"; // Import database module
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = () => {
  const auth = getAuth(firebaseApp);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const database = getDatabase(firebaseApp); // Initialize the database

  const handleCreateAccount = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Access the user object
      const user = response.user;

      // Save additional user details to the Realtime Database
      const userRef = ref(database, `users/${user.uid}`);
      set(userRef, {
        name,
        dob,
        weight,
        height,
        gender,
        email: user.email,
      });
      console.log(userRef + user);
      // Navigate to Home or another screen
      navigateToScreen("Login");
    } catch (error) {
      // Handle account creation errors
      console.error("Account creation failed:", error.message);
    }
  };
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      }}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Please enter your details</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Date Of Birth"
            onChangeText={setDob}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Weight(in Kg)"
            onChangeText={setWeight}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Height(in Cm)"
            onChangeText={setHeight}
          />
          <View style={styles.container1}>
            <Text style={styles.txt}>Gender :</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setGender("Male")}
              >
                <View
                  style={[
                    styles.radioButtonDot,
                    { backgroundColor: gender === "Male" ? "orange" : "white" },
                  ]}
                />
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setGender("Female")}
              >
                <View
                  style={[
                    styles.radioButtonDot,
                    {
                      backgroundColor: gender === "Female" ? "orange" : "white",
                    },
                  ]}
                />
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.or}>or</Text>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => navigateToScreen("Login")}
          >
            <Text style={styles.googleButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  container1: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "flex-start",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    height: 50,
    width: 340,
    borderRadius: 10,
    marginBottom: 20,
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
  input: {
    width: 350,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: 350,
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
  or: {
    fontSize: 18,
    marginVertical: 20,
  },
  googleButton: {
    width: 350,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    marginBottom: 20,
  },
  googleButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  signup: {
    fontSize: 16,
  },
  signupLink: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default CreateAccount;
