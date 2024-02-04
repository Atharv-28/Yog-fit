import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ExerciseCard = ({ exercise, onPress }) => {
  const {
    name,
    need,
    suitable,
    benefits,
    procedure,
    sets,
    img,
  } = exercise;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>Benefits: {benefits.join(', ')}</Text>
        <Text style={styles.details}>Sets: {sets}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  procedureContainer: {
    marginLeft: 16,
  },
  procedureStep: {
    fontSize: 14,
    color: '#777',
    marginBottom: 2,
  },
});

export default ExerciseCard;
