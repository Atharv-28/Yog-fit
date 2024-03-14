import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import ExerciseCard from "./myTemplateCard";
import generateUniqueColors from "../utils/generateUniqueColors";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const MyTemplate = () => {
  const getNextColor = generateUniqueColors();

  const auth = getAuth(firebaseApp);
  const database = getDatabase();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const userRef = ref(database, `users/${authUser.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          // console.log(userData);
          setUser(userData);
        });
      } else {
        // Handle the case when the user is not authenticated
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, database]);

  // Move the const item = user.myTemplates inside the function body
  const item = user ? user.myTemplates : [];

  return (
    <ScrollView>
      {item && item.length > 0 ? (
        item.map((template, index) => (
          <ExerciseCard
            style={styles.SV}
            color={getNextColor()}
            key={index}
            item={template}
          />
        ))
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/11329/11329060.png",
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 300,
  },
  SV: {
    gap: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyTemplate;
