

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

const loginForm = document.getElementById("loginForm");

console.log("Login form detected:", loginForm);

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    console.log("Email:", email);
    console.log("Password length:", password.length);

    try {
      console.log("Trying login...");
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      window.location.href = "marketplace.html";
    } catch (error) {
      console.error("Login error:", error);

      if (error.code === "auth/user-not-found") {
        console.log("User not found, creating account...");
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          alert("Account created & logged in");
          window.location.href = "marketplace.html";
        } catch (signupError) {
          console.error("Signup error:", signupError);
          alert(signupError.message);
        }
      } else {
        alert(error.message);
      }
    }
  });
}
