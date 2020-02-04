// Import firrebase and the needed components
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoXtO1Fh1t0PEGKUaPMQiPijizoitJVSg",
  authDomain: "platine-miolan.firebaseapp.com",
  databaseURL: "https://platine-miolan.firebaseio.com",
  projectId: "platine-miolan",
  storageBucket: "platine-miolan.appspot.com",
  messagingSenderId: "533794087975",
  appId: "1:533794087975:web:474342c2aa64d9e6e05a02"
};

// Get a firebase instance
firebase.initializeApp( firebaseConfig );

export const fb = firebase;
// Get a firestore instance
export const db= firebase.firestore();

export const storage = firebase.storage();

//Get an auth instance
export const auth = firebase.auth();

export const currentUser = auth.currentUser;


