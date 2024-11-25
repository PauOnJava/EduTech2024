// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4C36mTXKkKrznUBFSSvtWgY5O_HRkNvc",
    authDomain: "edutech-hackathon-ac9ca.firebaseapp.com",
    projectId: "edutech-hackathon-ac9ca",
    storageBucket: "edutech-hackathon-ac9ca.firebasestorage.app",
    messagingSenderId: "756424088425",
    appId: "1:756424088425:web:0b46d295484334c6423bf8",
    measurementId: "G-7EZSDDG84N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);