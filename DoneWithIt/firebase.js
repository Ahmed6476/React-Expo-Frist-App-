// Import the functions you need from the SDKs you need
import  firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyAnISxItgAjHLa9Con3ODlwc8RyDcYqrSk",
    authDomain: "expo-auth-1eab4.firebaseapp.com",
    projectId: "expo-auth-1eab4",
    storageBucket: "expo-auth-1eab4.appspot.com",
    messagingSenderId: "1077630064274",
    appId: "1:1077630064274:web:851a889da330c1db06384b"
  };
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };