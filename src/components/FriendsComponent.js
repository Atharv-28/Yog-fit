// TabsComponent.js
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { friends } from "../utils/friends";

const FriendsComponent = () => {
  return (
    <ScrollView style={styles.container}>
      {friends.map((friend) => (
        <View key={friend.id} style={styles.friendContainer}>
          <Image style={styles.img} source={{ uri: friend.img }} />
          <View>
            <Text>{friend.name}</Text>
            <Text>{friend.username}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 50,
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
});

export default FriendsComponent;
