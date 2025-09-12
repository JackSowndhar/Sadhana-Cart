import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Use getAuth instead of importing auth

const firebaseConfig = {
  apiKey: "AIzaSyDpjMz_gzDUtdLtBryB1hDBccT7vgqRYaE",
  authDomain: "sadhana-cart.firebaseapp.com",
  projectId: "sadhana-cart",
  storageBucket: "sadhana-cart.firebasestorage.app",
  messagingSenderId: "126398142924",
  appId: "1:126398142924:web:86f6c4c5cbe9a91685a569",
  measurementId: "G-YB7BJQF2YD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // ✅ Create auth instance here

export { db, auth };
