// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; // Import from 'firebase/compat/app'
import 'firebase/compat/auth'; // Import other modules you need from firebase/compat
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsPQzSxKY8-86-k4jDueHGWY1G7WWgkiE",
  authDomain: "madhu-1ce7b.firebaseapp.com",
  projectId: "madhu-1ce7b",
  storageBucket: "madhu-1ce7b.appspot.com",
  messagingSenderId: "594664955809",
  appId: "1:594664955809:web:4b387bd82d57ffcf0db5e0"
};


// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore()

export {firebase, db};
