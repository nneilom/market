// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6pP7dg6p0v-ePPhRbiH268Nv0spHGs5s",
  authDomain: "hacaton-js31rj.firebaseapp.com",
  projectId: "hacaton-js31rj",
  storageBucket: "hacaton-js31rj.appspot.com",
  messagingSenderId: "1078584846824",
  appId: "1:1078584846824:web:cafeb954897c0763599c5d",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;