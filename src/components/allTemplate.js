import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import TemplateCard from "./templateCard";
import { firebaseApp } from "../../database/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import generateUniqueColors from "../utils/generateUniqueColors";

const AllTemplate = () => {
  const firestore = getFirestore(firebaseApp);

  const [items, setItems] = useState([]);
  const getNextColor = generateUniqueColors();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "yogaExercises"));

        // Extract data from snapshot
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setItems(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <ScrollView>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <TemplateCard color={getNextColor()} item={item} key={item.id} />
        ))
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG8ydmg2djhtNXBld242cms5OWFvZThnNGJ0NXJ5bnEybG1ocmhvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sSgvbe1m3n93G/giphy.gif",
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    flexDirection:"row",
    alignSelf: "center",
    marginTop:150,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AllTemplate;
