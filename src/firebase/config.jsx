// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-OVaauOEofH0B7-epPynU-DEvsFePC8c",
  authDomain: "ecommerce-skn.firebaseapp.com",
  projectId: "ecommerce-skn",
  storageBucket: "ecommerce-skn.appspot.com",
  messagingSenderId: "70871368401",
  appId: "1:70871368401:web:8d78b9530a1b2f666dbbf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function initFirestore(){
    return app;
}