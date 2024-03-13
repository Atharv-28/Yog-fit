import React,{useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";

const Acc = () => {
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


  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={[styles.user,styles.shadowProp]}>
      <TouchableOpacity
        style={styles.goProfile}
        onPress={() => navigateToScreen("PersonalProfile")}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
          }}
          style={[styles.image, styles.marg]}
        />
        <Text style={[styles.marg, styles.txt]}>{user ? user.name : "User"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.marg}
        onPress={() => navigateToScreen("Login")}
      >
        <Image
          style={styles.image2}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/8568/8568977.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    backgroundColor:"#CAE0ED",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    height: 120,
    width: 350,
    borderRadius: 30,
    justifyContent: "space-around",
  },
  goProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  image2: {
    height: 50,
    width: 50,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Acc;
