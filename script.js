// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your Firebase config (replace with your own from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyAsow2E887y6DnMl-jHLTynE32ujLeVpeo",
  authDomain: "one-minute-reflex.firebaseapp.com",
  projectId: "one-minute-reflex",
  storageBucket: "one-minute-reflex.firebasestorage.app",
  messagingSenderId: "105402079758",
  appId: "1:105402079758:web:3953e2c16abb26c5e93a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign in anonymously
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously!");
  })
  .catch((error) => {
    console.error("Error signing in:", error);
  });

// Detect when user is signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User ID:", user.uid);
  }
});
