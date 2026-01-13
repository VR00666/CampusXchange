

    /* ==========================
   FIREBASE INITIALIZATION
========================== */
// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDzG06a06LaXvrLUd6jpDS-s7nYUF7k0KY",
  authDomain: "campusxchange-81a70.firebaseapp.com",
  projectId: "campusxchange-81a70",
  storageBucket: "campusxchange-81a70.firebasestorage.app",
  messagingSenderId: "232825369256",
  appId: "1:232825369256:web:aa24a4d5325d15abd7489d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



console.log("🔥 Firebase connected successfully");

/* ==========================
   AUTHENTICATION LOGIC
========================== */

/* ==========================
   AUTHENTICATION LOGIC
========================== */

console.log("AUTH SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT LOADED");

  const loginForm = document.getElementById("loginForm");
  console.log("LOGIN FORM VALUE:", loginForm);

  if (!loginForm) {
    console.log("LOGIN FORM NOT FOUND — EXITING");
    return;
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("SUBMIT HANDLER REACHED");
  });

