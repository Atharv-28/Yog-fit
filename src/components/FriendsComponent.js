// TabsComponent.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { friends } from "../utils/friends";

const FriendsComponent = () => {
  return (
    <View style={styles.container}>
      {friends.map((friend) => (
        <View key={friend.id} style={styles.friendContainer}>
          <Text>{friend.name}</Text>
          {/* <Text>{friend.username}</Text> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  friendContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 200,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default FriendsComponent;
