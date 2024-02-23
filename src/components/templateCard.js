// TemplateCard.js
import {React, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

const TemplateCard = ({ item, color }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };
  return (
    <TouchableOpacity style={[styles.card,{backgroundColor: color}]} onPress={handleToggleExpand}>
      <View
        style={{ padding: 10 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 14 }}>{item.benefits}</Text>

        {isExpanded && (
          <View>
            <Text>Need: {item.need}</Text>
            <Text>Suitable: {item.suitable}</Text>
            <Button style={styles.but} title="Add to MyTemplates" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card:{
    borderRadius:15,
    padding: 10,
    marginBottom:10,
  },
  but:{
    width: 80,
    height:20,
  }
})

export default TemplateCard;
