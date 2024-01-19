// TabsComponent.js
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { friends } from "../utils/friends";

const FriendsComponent = () => {
  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.username}</Text>
        </View>
      )}
    />
  );
};

export default FriendsComponent;
