// TemplateCard.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExerciseCard = ({ item, color }) => {
    const navigation = useNavigation();

    const navigateToScreen = (screenName, item) => {
        navigation.navigate(screenName, { exercise: item });
      };
      
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor: color}]} onPress={() => navigateToScreen("EYPage", item)}>
      <View style={styles.box}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={[styles.txt,{ fontSize: 14}]}>{item.benefits}</Text>
        <Text style={[ styles.txt,{ fontSize: 14 }]}>{item.sets}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    borderRadius: 40,
    marginBottom: 10,
  },
  box:
  {
    flex:1,
    padding: 20,
    flexDirection: "column",
    gap: 5,
  },
  txt:{
    color: "black",

  }
})

export default ExerciseCard;
