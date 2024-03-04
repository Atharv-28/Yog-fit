import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBBR1Vff9EflJraTU1UfpcSRzXyEFtACTo",
    authDomain: "yog-fit-78ad0.firebaseapp.com",
    projectId: "yog-fit-78ad0",
    storageBucket: "yog-fit-78ad0.appspot.com",
    messagingSenderId: "605289664985",
    appId: "1:605289664985:web:cc5c0d264bdb22d30d89c8",
    measurementId: "G-71S8R4DTS1",
    databaseURL: "https://yog-fit-78ad0-default-rtdb.asia-southeast1.firebasedatabase.app",

  };
const firebaseApp = initializeApp(firebaseConfig);

export default {firebaseApp};
//https://yog-fit-78ad0-default-rtdb.asia-southeast1.firebasedatabase.app