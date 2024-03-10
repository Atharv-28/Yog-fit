import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { users } from "../utils/users";
import { useNavigation, useRoute } from "@react-navigation/native";

const SearchComponent = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName, params) => {
    navigation.navigate(screenName, params);
  };

  const [searchText, setSearchText] = useState("");
  const filteredusers = users.filter(
    (users) =>
      users.name.toLowerCase().includes(searchText.toLowerCase()) ||
      users.username.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.Searchresult}>
      <TextInput
        style={styles.searchBar}
        placeholder="🔍Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredusers.map((item) => (
          <TouchableOpacity
            style={styles.result}
            key={item.id}
            onPress={() => navigateToScreen("PublicProfile", { item: item })}
          >
            <Image
              style={styles.img}
              source={{
                uri: item.img,
              }}
            />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

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
  Searchresult: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  result: {
    padding: 10,
    gap: 15,
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
