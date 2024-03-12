// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX8d7_un0EFS9m2fgb6qz5ov7IC-i4h7E",
  authDomain: "homelink-3deaf.firebaseapp.com",
  projectId: "homelink-3deaf",
  storageBucket: "homelink-3deaf.appspot.com",
  messagingSenderId: "619423746980",
  appId: "1:619423746980:web:dec6ca7c9057bda8cb4f31",
  measurementId: "G-909W95W21M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);