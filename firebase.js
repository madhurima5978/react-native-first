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
  apiKey: "AIzaSyBWWTdMVqccfBiY9J9OJoQDuTUFLGQCHak",
  authDomain: "campus-connect-1-43cf8.firebaseapp.com",
  projectId: "campus-connect-1-43cf8",
  storageBucket: "campus-connect-1-43cf8.appspot.com",
  messagingSenderId: "320038904597",
  appId: "1:320038904597:web:3a5e058de93d1e314fbf1c",
  measurementId: "G-T6SQJMM0P4"
};


// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore()

export {firebase, db};
