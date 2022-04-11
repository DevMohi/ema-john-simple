// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs1IQjhUP5Bzl9M9Ixyxn2luP29PrFzmw",
    authDomain: "ema-john-simple-a6dbb.firebaseapp.com",
    projectId: "ema-john-simple-a6dbb",
    storageBucket: "ema-john-simple-a6dbb.appspot.com",
    messagingSenderId: "632676197938",
    appId: "1:632676197938:web:44dbb01305562a99e77e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;