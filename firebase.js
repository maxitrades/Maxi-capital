import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "maxi-capital.firebaseapp.com",
  projectId: "maxi-capital",
  storageBucket: "maxi-capital.appspot.com",
  messagingSenderId: "496545084482",
  appId: "1:496545084482:web:689f942d3d02aec99169db"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
