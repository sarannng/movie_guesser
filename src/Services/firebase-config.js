// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCcK_oc5GSZuD6gqaAivqKRVDVNqFQtUg",
  authDomain: "movieguesser-85858.firebaseapp.com",
  projectId: "movieguesser-85858",
  storageBucket: "movieguesser-85858.appspot.com",
  messagingSenderId: "423449361523",
  appId: "1:423449361523:web:6e23df75a8f6d9b5777e06",
  measurementId: "G-4M8RJVWL4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
