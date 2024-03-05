const admin = require('firebase-admin');
const serviceAccount = require('./yog-fit-78ad0-firebase-adminsdk-b054w-dfa214b8f0.json');
const exercises = require('../src/utils/yoga'); // Adjust the path accordingly

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Reference to the Firestore database
const db = admin.firestore();

// Function to populate Firestore with exercise data
const populateFirestore = async () => {
  try {
    // Loop through exercises and add each one to Firestore
    for (const exercise of exercises) {
      await db.collection('yogaExercises').add(exercise);
      console.log(`Exercise "${exercise.name}" added to Firestore`);
    }

    console.log('Data population complete!');
  } catch (error) {
    console.error('Error populating Firestore:', error);
  } finally {
    // Close the Firestore connection
    admin.app().delete();
  }
};

// Call the function to populate Firestore
populateFirestore();
