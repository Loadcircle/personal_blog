import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUUbpfXp1Gs37YesF-s9XSzUainWDI-h8",
    authDomain: "personal-blog-2900a.firebaseapp.com",
    projectId: "personal-blog-2900a",
    storageBucket: "personal-blog-2900a.appspot.com",
    messagingSenderId: "179464430515",
    appId: "1:179464430515:web:33a84bcf42daa1a9ac21c6",
    measurementId: "G-E5NW09G52S"
};

firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();

const db = firebase.firestore();

export {
    db, 
    firebase,
}