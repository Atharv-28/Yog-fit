import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import BottomNav from "../components/bottomNav";
import Card from "../components/card";
import Welcome from "../components/welcome";
import generateUniqueColors from "../utils/generateUniqueColors";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const Home = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  const getNextColor = generateUniqueColors();


  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const database = getDatabase(firebaseApp);
    if (auth.currentUser) {
      const userIdentifier = auth.currentUser.uid;
      const userRef = ref(database, `users/${userIdentifier}/analytics`);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setAnalyticsData(Object.values(data));
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error("Error fetching analytics data:", error);
        });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <Welcome style={styles.Welcome} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        {analyticsData.map((analytics, index) => (
          <Card
            key={index}
            title={analytics.nameEY}
            score={analytics.score}
            streak={analytics.streak}
            diff={analytics.dEY}
            color={getNextColor()}
            analyticStat={analyticsData}
          />
        ))}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffff",
  },
  Welcome: {
    height: 80,
    width: 300,
    flex: 0.1,
  },
});

export default Home;
