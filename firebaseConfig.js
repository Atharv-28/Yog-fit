import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBR1Vff9EflJraTU1UfpcSRzXyEFtACTo",
    authDomain: "yog-fit-78ad0.firebaseapp.com",
    projectId: "yog-fit-78ad0",
    storageBucket: "yog-fit-78ad0.appspot.com",
    messagingSenderId: "605289664985",
    appId: "1:605289664985:web:cc5c0d264bdb22d30d89c8",
    measurementId: "G-71S8R4DTS1"
  };

//   if (!firebase.apps || !firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

// export default firebase;
const firebaseApp = initializeApp(firebaseConfig);

export default {firebaseApp};