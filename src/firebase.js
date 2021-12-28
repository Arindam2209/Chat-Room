import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBRUiz-k7VcBWGUpjJGY9RkI3N8oQ9CoVc",
    authDomain: "chat-room-2b3e7.firebaseapp.com",
    projectId: "chat-room-2b3e7",
    storageBucket: "chat-room-2b3e7.appspot.com",
    messagingSenderId: "175495177624",
    appId: "1:175495177624:web:177b2e51fc80dbcae2b7ed",
    measurementId: "G-WMP6MMLK30"
}).auth();