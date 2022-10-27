// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyCKir_y6g4fQeLPFJxDB6oauO7JnPPT0",
  authDomain: "mobile-expense-tracker-app.firebaseapp.com",
  projectId: "mobile-expense-tracker-app",
  storageBucket: "mobile-expense-tracker-app.appspot.com",
  messagingSenderId: "945511999902",
  appId: "1:945511999902:web:d67e5c93325025cd8dce8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
