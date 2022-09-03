import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKHJFdry1XJaJPO_uvxM-mvNxrqQXbWWQ",
  authDomain: "tik-tok-clone-7513a.firebaseapp.com",
  projectId: "tik-tok-clone-7513a",
  storageBucket: "tik-tok-clone-7513a.appspot.com",
  messagingSenderId: "687117064514",
  appId: "1:687117064514:web:1895cb44b26a1f9488d0db",
  measurementId: "G-S64DH7HVQ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;