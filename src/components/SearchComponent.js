import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "../../database/firebaseConfig";


const SearchComponent = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName, params) => {
    navigation.navigate(screenName, params);
  };

  const database = getDatabase(firebaseApp);
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.values(data);
        setUsersData(usersArray);
      } else {
        setUsersData([]);
      }
    });
  }, [database]);

  const filteredUsers = usersData.filter(
    (user) =>
      (user.name?.toLowerCase()?.includes(searchText.toLowerCase()) || "") ||
      (user.username?.toLowerCase()?.includes(searchText.toLowerCase()) || "")
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="🔍Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredUsers.map((item) => (
          <UserItem
            key={item.id}
            item={item}
            onPress={() => navigateToScreen("PublicProfile", { item: item })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const UserItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.result} onPress={onPress}>
    <Image
      style={styles.img}
      source={{
        uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
      }}
    />
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginRight: 15,
  },
  searchBar: {
    height: 40,
    width: 250,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    backgroundColor: "white",
  },
  result: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 10,
    height: 55,
    width: 250,
    borderRadius: 20,
  },
});

export default SearchComponent;
