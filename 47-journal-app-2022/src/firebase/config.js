// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vaailqFJ1ufW7X6hXH2Z5I06yy_VCCI",
  authDomain: "react-cursos-cda62.firebaseapp.com",
  projectId: "react-cursos-cda62",
  storageBucket: "react-cursos-cda62.appspot.com",
  messagingSenderId: "995663104854",
  appId: "1:995663104854:web:34ecb9542430ad539f64f7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );