// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2wWugxo-8TW2yzzlinfgLbLC9BAYs7cw",
  authDomain: "slack-clone-5bb94.firebaseapp.com",
  projectId: "slack-clone-5bb94",
  storageBucket: "slack-clone-5bb94.appspot.com",
  messagingSenderId: "480786996595",
  appId: "1:480786996595:web:4dffb4ca3f358e13a83906"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };