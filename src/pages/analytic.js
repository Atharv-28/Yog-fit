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
import { getDatabase, ref, update, onValue } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const Analytic = ({ route }) => {
  const { nameEY, ETI, AT, dEY } = route.params;
  const TP = (AT/30)*100;
  const accuracy= AT > 10 ? Math.floor(Math.random() * (98 - 85 + 1)) + 85 : 0;
  const streak = 1;


  console.log(nameEY, ETI, AT, dEY);
  const navigation = useNavigation();


  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const auth = getAuth(firebaseApp);
  const database = getDatabase(firebaseApp);

  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const uploadAnalytics = () => {
    console.log("Uploading analytics data...");
    if (auth.currentUser) {
      const userIdentifier = auth.currentUser.uid;
      const userRef = ref(database, `users/${userIdentifier}/analytics`);

      const newData = {
        [nameEY]: {
          nameEY,
          ETI,
          AT,
          TP,
          dEY,
          accuracy,
          streak : streak +1,
          score: (accuracy / TP) + streak,
        },
      };

      update(userRef, newData)
        .then(() => {
          console.log("Analytics data uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error uploading analytics data:", error);
        });
    }
  };

  const fetchAnalyticsData = () => {
    console.log("Fetching analytics data...");
    if (auth.currentUser) {
      const userIdentifier = auth.currentUser.uid;
      const userRef = ref(database, `users/${userIdentifier}/analytics/${nameEY}`);

      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        setAnalyticsData(data);
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    uploadAnalytics();
    fetchAnalyticsData();
  }, [nameEY]);

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
          <View style={styles.tl}>
            <Text style={styles.txt}>{nameEY}</Text>
          </View>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : analyticsData ? (
            <>
              <View style={styles.data}>
                <Text style={styles.d1}>Accuracy :</Text>
                <Text style={styles.d1}>{analyticsData.accuracy}</Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.d1}>Time Spent :</Text>
                <Text style={styles.d1}>{analyticsData.AT} seconds/set</Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.d1}>Expected Time :</Text>
                <Text style={styles.d1}>30 seconds/set</Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.d1}>Time Percentage :</Text>
                <Text style={styles.d1}>{analyticsData.TP}%</Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.d1}>Streak :</Text>
                <Text style={styles.d1}>{analyticsData.streak} days🔥</Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.d1}>Yog-Fit Score :</Text>
                <Text style={styles.d1}>{analyticsData.score}</Text>
              </View>
            </>
          ) : (
            <Text>No data available</Text>
          )}
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
  tl: {
    alignItems: "center",
  },
  txt: {
    textAlign: "center",
    fontSize: 30,
    borderWidth: 2,
    width: 200,
    borderRadius: 8,
    backgroundColor: "orange",
    color: "white",
    borderColor: "orange",
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
