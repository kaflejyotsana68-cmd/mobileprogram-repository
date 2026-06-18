// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getDatabase,
  get,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuDystp8CuB-cXjec0GPSSPhw6xyBHSkA",
  authDomain: "new-project-3df3f.firebaseapp.com",
  projectId: "new-project-3df3f",
  storageBucket: "new-project-3df3f.firebasestorage.app",
  messagingSenderId: "243135891883",
  appId: "1:243135891883:web:b2059b2c2a7c4974eaaaee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log(db);
