import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBR3TvKwApNlJA-iL1brqepKWxCIawk-60",
  authDomain: "tpro-bd1fd.firebaseapp.com",
  projectId: "tpro-bd1fd",
  storageBucket: "tpro-bd1fd.appspot.com",
  messagingSenderId: "99476199403",
  appId: "1:99476199403:web:4eedc91e69700ed204ebae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


