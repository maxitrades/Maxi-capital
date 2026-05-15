import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { setPersistence, browserLocalPersistence } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACHSsLJF...",
  authDomain: "maxi-capital.firebaseapp.com",
  projectId: "maxi-capital",
  storageBucket: "maxi-capital.appspot.com",
  messagingSenderId: "496545084482",
  appId: "1:496545084482:web:689f942d3d02aec99169db"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔥 FIX LOGIN STABILITY
await setPersistence(auth, browserLocalPersistence);
