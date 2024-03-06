import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import ExerciseCard from "./myTemplateCard";
import generateUniqueColors from "../utils/generateUniqueColors";

const MyTemplate = ({ items = [] }) => {
  const getNextColor = generateUniqueColors();
  return (
    <ScrollView >
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <ExerciseCard
          style={styles.SV}
          color={getNextColor()}
            key={index}
            item={item}
          />
        ))
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.pngkey.com/png/full/862-8620381_work-in-progress-sign.png",
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 300,
  },
  SV:{
    gap:5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyTemplate;
