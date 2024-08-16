// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMvqpwQ3XeBcqkSs4I1VXP-3wShPp7A4w",
  authDomain: "streamr-d3fda.firebaseapp.com",
  projectId: "streamr-d3fda",
  storageBucket: "streamr-d3fda.appspot.com",
  messagingSenderId: "875298074620",
  appId: process.env.REACT_APP_FIREBASE_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)