// TemplateCard.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ExerciseCard = ({ item }) => {
    const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TouchableOpacity onPress={() => navigateToScreen("EYPage")}>
      <View
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: "#555" }}>{item.benefits}</Text>
        <Text style={{ fontSize: 14, color: "#555" }}>{item.sets}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
