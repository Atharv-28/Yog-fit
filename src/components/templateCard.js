// TemplateCard.js
import {React, useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TemplateCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };
  return (
    <TouchableOpacity onPress={handleToggleExpand}>
      <View
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }}
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

export default TemplateCard;
