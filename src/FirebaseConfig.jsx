// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs3NS8a-TsLe79gtY8Nl6WjG7G_W69sx0",
  authDomain: "balaghatplus-9bff4.firebaseapp.com",
  projectId: "balaghatplus-9bff4",
  storageBucket: "balaghatplus-9bff4.firebasestorage.app",
  messagingSenderId: "327986522125",
  appId: "1:327986522125:web:4180452f022d0d25fb0d44",
  measurementId: "G-BPMFENHYDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);