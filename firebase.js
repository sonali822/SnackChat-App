// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAshYMsi5ligxNAXDlGunnzNCQTmSo0Hfo",
    authDomain: "stackchat-2baa1.firebaseapp.com",
    projectId: "stackchat-2baa1",
    storageBucket: "stackchat-2baa1.appspot.com",
    messagingSenderId: "957409316553",
    appId: "1:957409316553:web:6658de344c7f07fae84718"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }