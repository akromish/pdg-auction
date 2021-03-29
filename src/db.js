import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAkV1GJZ3my2QYGwCd9vRMFU4NGoTvcuB0",
    authDomain: "pdg-app-f75fb.firebaseapp.com",
    databaseURL: "https://pdg-app-f75fb-default-rtdb.firebaseio.com",
    projectId: "pdg-app-f75fb",
    storageBucket: "pdg-app-f75fb.appspot.com",
    messagingSenderId: "1090019154090",
    appId: "1:1090019154090:web:33dc43ba980556d41798d3",
    measurementId: "G-DXKSTB41FK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// db.firebase.analytics();

export { db };

