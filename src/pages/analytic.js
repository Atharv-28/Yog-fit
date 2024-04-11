import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const Analytic = ({ route }) => {
  const { nameEY, ETI, AT, dEY } = route.params;
  console.log(nameEY, ETI, AT, dEY);
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const auth = getAuth(firebaseApp);
  const database = getDatabase(firebaseApp);

  const [analyticsUpdated, setAnalyticsUpdated] = useState(false);

  const updateAnalytics = () => {
    console.log("Updating analytics data...");
    if (auth.currentUser && !analyticsUpdated) {
      const userIdentifier = auth.currentUser.uid;
      const userRef = ref(database, `users/${userIdentifier}/analytics`);

      // Check if the user is already authenticated
      if (userRef) {
        const newData = {
          [nameEY]: {
            ETI,
            AT,
            accuracy: AT > 10 ? Math.floor(Math.random() * (98 - 85 + 1)) + 85 : 0,
            streak: 1,
            score: ((AT > 10 ? Math.floor(Math.random() * (98 - 85 + 1)) + 85 : 0) + AT / 30) / 200 + 100 + 1,
          },
        };

        // Update the analytics data
        update(userRef, newData)
          .then(() => {
            console.log("Analytics data updated successfully!");
            setAnalyticsUpdated(true); // Set the flag to prevent further updates
          })
          .catch((error) => {
            console.error("Error updating analytics data:", error);
          });
      }
    }
  };

  useEffect(() => {
    updateAnalytics();
    // Add an empty dependency array to ensure the effect runs only once
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <TouchableOpacity onPress={() => navigateToScreen("Home")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/189/189254.png",
            }}
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.anlys}>
          <View style={styles.data}>
            <Text style={styles.d1}>Accuracy :</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Time Spent :</Text>
            <Text style={styles.d1}>4 min/day</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Expected Time :</Text>
            <Text style={styles.d1}>5 min/day</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Time Percentage :</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Streak :</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.d1}>Yog-Fit Score :</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    marginLeft: 10,
    marginRight: 10,
  },
  img: {
    marginTop: 10,
    height: 50,
    width: 50,
  },
  anlys: {
    flexDirection: "column",
    alignItems: "center",
  },
  data: {
    flexDirection: "row",
    gap: 30,
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },
  d1: {
    fontSize: 20,
  },
});

export default Analytic;
