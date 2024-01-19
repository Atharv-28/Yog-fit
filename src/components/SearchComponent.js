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
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 10,
          paddingLeft: 10,
        }}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredFriends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.username}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchComponent;
