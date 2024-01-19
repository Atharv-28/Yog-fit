import { React, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { friends } from "../utils/friends";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const filteredFriends = friends.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchText.toLowerCase()) ||
      friend.username.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.Searchresult}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {/* <FlatList
        style={styles.result}
        data={filteredFriends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      /> */}
      <View>
        {filteredFriends.map((item) => (
          <View style={styles.result} key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  result: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 2,
    marginBottom: 10,
    height: 35,
    width: 200,
    borderRadius: 30,
  },
});

export default SearchComponent;
