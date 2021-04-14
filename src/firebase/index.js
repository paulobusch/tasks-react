import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyAoq9jGzBP6caqPJ-tt2P6lxHiQxHiApo0",
  authDomain: "tasks-876f5.firebaseapp.com",
  projectId: "tasks-876f5",
  storageBucket: "tasks-876f5.appspot.com",
  messagingSenderId: "377356473879",
  appId: "1:377356473879:web:dd16744fb0ae44dbecee52",
  measurementId: "G-TRZTVCN8C8"
};

const firebaseInstance = firebase.initializeApp(config);
export default firebaseInstance;
