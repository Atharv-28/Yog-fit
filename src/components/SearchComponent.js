import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { users } from "../utils/users";

const SearchComponent = () => {
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
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView>
        {filteredusers.map((item) => (
          <View style={styles.result} key={item.id}>
            <Image
              style={styles.img}
              source={{
                uri: item.img,
              }}
            />
            <Text>{item.name}</Text>
          </View>
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
    width: 220,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
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
    borderColor: "green",
    borderWidth: 2,
    marginBottom: 10,
    height: 55,
    width: 200,
    borderRadius: 30,
  },
});

export default SearchComponent;
