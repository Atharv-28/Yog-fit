import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { getDatabase, ref, update, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../database/firebaseConfig";

const TemplateCard = ({ item, color }) => {
  const auth = getAuth(firebaseApp);
  const database = getDatabase(firebaseApp);

  const [isExpanded, setIsExpanded] = useState(false);


  const handleToggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const addToMyTemplates = async () => {
    try {
      // Use auth.currentUser to get the authenticated user information
      const userRef = ref(database, `users/${auth.currentUser.uid}`);
      const userSnapshot = await get(userRef);

      const myTemplates = userSnapshot.val().myTemplates || [];
      const updatedTemplates = [...myTemplates, { id: item.id, name: item.name }];

      await update(ref(database, `users/${auth.currentUser.uid}`), { myTemplates: updatedTemplates });

      console.log("Template added to MyTemplates successfully!");
    } catch (error) {
      console.error("Error adding template to MyTemplates:", error.message);
    }
  };

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={handleToggleExpand}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 14 }}>{item.benefits}</Text>

        {isExpanded && (
          <View>
            <Text>Need: {item.need}</Text>
            <Text>Suitable: {item.suitable}</Text>
            <Button style={styles.but} title="Add to MyTemplates" onPress={addToMyTemplates} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  but: {
    width: 80,
    height: 20,
  },
});

export default TemplateCard;
