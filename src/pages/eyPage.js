import React from 'react';
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native';

const ExerciseCard = ({ exercise }) => {
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
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{need}</Text>
        <Text style={styles.details}>{suitable}</Text>
        <Text style={styles.details}>Benefits: {benefits.join(', ')}</Text>
        <Text style={styles.details}>Procedure:</Text>
        <View style={styles.procedureContainer}>
          {procedure.map((step, index) => (
            <Text key={index} style={styles.procedureStep}>{`${index + 1}. ${step}`}</Text>
          ))}
        </View>
        <Text style={styles.details}>Sets: {sets}</Text>
      </View>
    </View>
  );
};

const EYPage = () => {
  const handleStartPress = () => {
    // Handle the "Start" button press event
    console.log('Start Button Pressed!');
  };

  return (
    <ScrollView>
      {Myey.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
      <View style={styles.startButtonContainer}>
        <Button title="Start" onPress={handleStartPress} />
      </View>
    </ScrollView>
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
  startButtonContainer: {
    margin: 16,
  },
});

export default EYPage;
