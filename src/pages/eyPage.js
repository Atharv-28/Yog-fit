//EYPage 
import React from 'react';
import { View, StatusBar, Platform, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const ExerciseCard = ({ exercise = [] }) => {

    return (
        <View style={styles.card}>
            <Image source={{ uri: exercise.img }} style={styles.image} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{exercise.name}</Text>
                <Text style={styles.details}>{exercise.need}</Text>
                <Text style={styles.details}>{exercise.suitable}</Text>
                <Text style={styles.details}>Benefits: {exercise.benefits.join(', ')}</Text>
                <Text style={styles.details}>Procedure:</Text>
                {/* <View style={styles.procedureContainer}>
          {procedure.map((step, index) => (
            <Text key={index} style={styles.procedureStep}>{`${index + 1}. ${exercise.procedure}`}</Text>
          ))}
        </View> */}
                <Text style={styles.details}>Sets: {exercise.sets}</Text>
            </View>
        </View>
    );
};

const EYPage = ({ route }) => {
    const { exercise } = route.params;
    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
      navigation.navigate(screenName);
    };
    return (
        <SafeAreaView style={styles.page}>
            <TouchableOpacity onPress={() => navigateToScreen("TemplatesPage")}>
                <Image
                    style={styles.back}
                    source={{uri:"https://cdn-icons-png.flaticon.com/128/189/189254.png"}}
                />
            </TouchableOpacity>
            <ScrollView>
                <ExerciseCard exercise={exercise} />
                <View style={styles.startButtonContainer}>
                    <Button title="Start" onPress={() => navigateToScreen("Tracker")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page:{
        flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        margin: 10,
        overflow: 'hidden',
    },
    back: {
        margin: 10,
        height: 40,
        width: 40,
        borderRadius: 50,
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
