// TemplateCard.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ExerciseCard = ({ item }) => {
    const navigation = useNavigation();

    const navigateToScreen = (screenName, item) => {
        navigation.navigate(screenName, { exercise: item });
      };
      
  return (
    <TouchableOpacity onPress={() => navigateToScreen("EYPage", item)}>
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
