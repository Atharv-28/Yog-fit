import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import TemplateCard from "./templateCard";

const AllTemplate = ({ items = [] }) => {
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
        <Text>No items available</Text>
      )}
    </ScrollView>
  );
};

export default AllTemplate;
