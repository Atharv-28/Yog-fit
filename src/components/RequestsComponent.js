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

const RequestComponent = () => {
  const [friendRequests, setFriendRequests] = useState([]);
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
              setFriendRequests(snapshot.val().friendRequests || []);
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

  const acceptRequest = (requestUserId) => {
    // Move user from friendRequests to Friends
    const userRef = ref(database, `users/${auth.currentUser.uid}`);
    update(userRef, {
      friendRequests: friendRequests.filter((id) => id !== requestUserId),
      Friends: [...friendRequests, requestUserId],
    });
    Alert.alert("Friend request accepted successfully!");
  };

  const rejectRequest = (requestUserId) => {
    // Remove user from friendRequests
    const userRef = ref(database, `users/${auth.currentUser.uid}`);
    update(userRef, {
      friendRequests: friendRequests.filter((id) => id !== requestUserId),
    });
    Alert.alert("Friend request rejected successfully!");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRequests = await Promise.all(
          friendRequests.map(async (userId) => {
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
  }, [database, friendRequests]);

  return (
    <View style={styles.container}>
      {friendRequests.map((item, index) => {
        const user = userData[item];
        if (!user) {
          return (
            <ActivityIndicator key={index} style={styles.loader} />
          );
        }
        return (
          <View key={index} style={styles.requestContainer}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
              }}
              style={styles.imgs}
            />
            <Text style={styles.txt}>{user.name}</Text>
            <TouchableOpacity onPress={() => acceptRequest(item)}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/190/190411.png",
                }}
                style={styles.imgs}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => rejectRequest(item)}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/11695/11695444.png",
                }}
                style={styles.imgs}
              />
            </TouchableOpacity>
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
  requestContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
    padding: 10,
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 15,
    borderColor: "#ffffff",
  },
  imgs: {
    width: 50,
    height: 50,
  },
  loader: {
    alignSelf: "center",
  },
});

export default RequestComponent;
