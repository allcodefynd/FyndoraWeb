// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHsNdGgCgUOKfjXULCs3WpsCXR4Ejgbs",
  authDomain: "fyndform-59351.firebaseapp.com",
  databaseURL: "https://fyndform-59351-default-rtdb.firebaseio.com",
  projectId: "fyndform-59351",
  storageBucket: "fyndform-59351.appspot.com",
  messagingSenderId: "532118563515",
  appId: "1:532118563515:web:49ed77294e5356e364179e",
  measurementId: "G-Y836QNNR50"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase