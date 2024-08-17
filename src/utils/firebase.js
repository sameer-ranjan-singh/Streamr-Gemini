// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "stream-d5716.firebaseapp.com",
  projectId: "stream-d5716",
  storageBucket: "stream-d5716.appspot.com",
  messagingSenderId: "877801976482",
  appId: "1:877801976482:web:ca70cd549467cc2be95dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)