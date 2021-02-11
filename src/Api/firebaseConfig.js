import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjzetedjAZyARhb6dWYEVtLdgfS_j1OqU",
    authDomain: "notes-22118.firebaseapp.com",
    projectId: "notes-22118",
    storageBucket: "notes-22118.appspot.com",
    messagingSenderId: "49798761080",
    appId: "1:49798761080:web:7790591ce9d7bc3e40fb8d",
    measurementId: "G-4VER4NZ572"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;