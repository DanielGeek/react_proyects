import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// variables de entorno para desarrollo y testing configuradas en .env.development y .env.test
// console.log(process.env);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyDRdp6Xw9jpQbeEofzEVPlIXZk4IamuxZc",
//     authDomain: "redux-demo-c60e5.firebaseapp.com",
//     databaseURL: "https://redux-demo-c60e5.firebaseio.com",
//     projectId: "redux-demo-c60e5",
//     storageBucket: "redux-demo-c60e5.appspot.com",
//     messagingSenderId: "300165580143",
//     appId: "1:300165580143:web:43be8ab0adcc63ffeb149a"
// };

// if (process.env.NODE_ENV === 'test') {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     // dev/prod
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}