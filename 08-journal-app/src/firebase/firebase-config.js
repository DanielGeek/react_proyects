import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM1Yt6jOASKBZuNseUplcXNZreTgY8dZc",
    authDomain: "react-app-cursos-d8cda.firebaseapp.com",
    databaseURL: "https://react-app-cursos-d8cda.firebaseio.com",
    projectId: "react-app-cursos-d8cda",
    storageBucket: "react-app-cursos-d8cda.appspot.com",
    messagingSenderId: "72492644127",
    appId: "1:72492644127:web:6e9f9f5eeca9304abda22a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }