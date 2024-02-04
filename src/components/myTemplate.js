import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import TemplateCard from "./myTemplateCard";

const MyTemplate = ({ items = [] }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleExpand = (itemId) => {
    setExpandedId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <ScrollView>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <TemplateCard
            key={index}
            item={item}
            isExpanded={item.id === expandedId}
            onToggleExpand={() => handleToggleExpand(item.id)}
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyTemplate;
