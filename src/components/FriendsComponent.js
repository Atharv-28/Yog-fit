import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, update } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const FriendsComponent = () => {
  const [friends, setfriends] = useState([]);
  const [userData, setUserData] = useState({});
  const auth = getAuth(firebaseApp);
  const database = getDatabase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const userRef = ref(database, `users/${authUser.uid}`);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              setUserData(snapshot.val());
              setfriends(snapshot.val().Friends || []);
            } else {
              console.error("User data does not exist");
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        // Handle the case when the user is not authenticated
        // setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, database]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRequests = await Promise.all(
          friends.map(async (userId) => {
            const userRef = ref(database, `users/${userId}`);
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
              return { id: userId, data: snapshot.val() };
            }
          })
        );

        const userDataMap = {};
        userRequests.forEach((request) => {
          if (request) {
            userDataMap[request.id] = request.data;
          }
        });
        setUserData(userDataMap);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [database, friends]);

  return (
    <View style={styles.container}>
      {friends.map((item, index) => {
        const user = userData[item];
        if (!user) {
          return (
            <ActivityIndicator key={index} style={styles.loader} />
          );
        }
        return (
          <View key={index} style={styles.friendContainer}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
              }}
              style={styles.imgs}
            />
            <Text style={styles.txt}>{user.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  txt:{
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 18,
  },
  friendContainer: {
    marginBottom: 15,
    backgroundColor: "white",
    padding: 10,
    width: 250,
    height: 55,
    flexDirection: "row",
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
  },
  imgs: {
    width: 50,
    height: 50,
  },
  loader: {
    alignSelf: "center",
  },
});

export default FriendsComponent;
