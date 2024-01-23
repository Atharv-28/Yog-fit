import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const AllTemplate = ({ items = [], expandedId, onToggleExpand }) => {
  const renderExerciseItem = (item, index) => {
    const isExpanded = item.id === expandedId;

    return (
      <TouchableOpacity
        key={index} // Use index as the key
        onPress={() => onToggleExpand(item.id)}
      >
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 14, color: "#555" }}>{item.benefits}</Text>

          {isExpanded && (
            <View>
              <Text>Need: {item.need}</Text>
              <Text>Suitable: {item.suitable}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {items && items.length > 0 ? (
        items.map(renderExerciseItem)
      ) : (
        <Text>No items available</Text>
      )}
    </View>
  );
};

export default AllTemplate;
