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

const firebaseConfigTesting = {
    apiKey: "AIzaSyDRdp6Xw9jpQbeEofzEVPlIXZk4IamuxZc",
    authDomain: "redux-demo-c60e5.firebaseapp.com",
    databaseURL: "https://redux-demo-c60e5.firebaseio.com",
    projectId: "redux-demo-c60e5",
    storageBucket: "redux-demo-c60e5.appspot.com",
    messagingSenderId: "300165580143",
    appId: "1:300165580143:web:43be8ab0adcc63ffeb149a"
};

if (process.env.NODE_ENV === 'test') {
    // testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
    // dev/prod
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}