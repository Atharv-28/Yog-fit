// ExerciseCard.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const ExerciseCard = ({ item, color }) => {
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
          if (userData) {
            setUser(userData);
            //console.log(userData);
          } else {
            console.error("User data is null");
          }
        });
      } else {
        // Handle the case when the user is not authenticated
        setUser(null);
      }
    });
  
    return () => unsubscribe();
  }, [auth, database]);

  // Function to navigate to another screen passing the template item
  const navigateToScreen = (screenName, item) => {
    navigation.navigate(screenName, { exercise: item });
  };

  

  // Function to remove the template from My Templates

  const removeFromMyTemplates = () => {
    try {
      if (!user) {
        throw new Error("User is null");
      }
      const userRef = ref(database, `users/${auth.currentUser.uid}`);
      const updatedTemplates = user.myTemplates.filter(
        (template) => template.id !== item.id
      );
      update(userRef, { myTemplates: updatedTemplates });
      Alert.alert("Template removed successfully!");
    } catch (error) {
      console.error("Error removing template:", error.message);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => navigateToScreen("EYPage", item)}
    >
      <View style={styles.box}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={[styles.txt, { fontSize: 14 }]}>{item.benefits}</Text>
        <Text style={[styles.txt, { fontSize: 14 }]}>{item.sets}</Text>
      </View>
      {/* Add a Remove button */}
      <TouchableOpacity
        style={styles.removeButton}
        onPress={removeFromMyTemplates}
      >
        <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/9790/9790368.png",
              }}
              style={styles.icon}
            />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    marginBottom: 10,
    flexDirection: "row", // Added flexDirection to align the remove button
    justifyContent: "space-between", // Added to create space between card content and remove button
  },
  box: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    gap: 5,
  },
  txt: {
    color: "black",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  icon: {
    height: 30,
    width: 40,
  },
});

export default ExerciseCard;
