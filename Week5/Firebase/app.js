import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDPhmzoO_yqVTEIoLYRTWydu_Pf3Ojjp7I",
  authDomain: "jyotsana-fd98d.firebaseapp.com",
  databaseURL: "https://jyotsana-fd98d-default-rtdb.firebaseio.com",
  projectId: "jyotsana-fd98d",
  storageBucket: "jyotsana-fd98d.firebasestorage.app",
  messagingSenderId: "772650789732",
  appId: "1:772650789732:web:9c4ecd308925362bade871",
  measurementId: "G-JG2QM305P0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ADD USER
async function addUser() {
  try {
    await set(ref(db, "users/1"), {
      firstName: "Jyotsana",
      lastName: "Kafle",
      email: "jk@gmail.com",
      address: "Kathmandu",
      phoneNumber: "9816578398",
      age: 20,
      gender: "Female",
      nationality: "Nepali",
      language: "English",
      subject: "Data Security",
    });

    document.getElementById("output").textContent = "User Added Successfully!";
  } catch (error) {
    console.error(error);
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}

// GET USER
async function getUser() {
  try {
    const snapshot = await get(ref(db, "users/1"));

    if (snapshot.exists()) {
      document.getElementById("output").textContent = JSON.stringify(
        snapshot.val(),
        null,
        2,
      );
    } else {
      document.getElementById("output").textContent = "No Data Found";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}

// UPDATE USER
async function updateUser() {
  try {
    await update(ref(db, "users/1"), {
      age: 23,
      subject: "Network Security",
    });

    document.getElementById("output").textContent =
      "User Updated Successfully!";
  } catch (error) {
    console.error(error);
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}

// DELETE USER
async function deleteUser() {
  try {
    await remove(ref(db, "users/1"));

    document.getElementById("output").textContent =
      "User Deleted Successfully!";
  } catch (error) {
    console.error(error);
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}

// Make functions accessible from HTML
window.addUser = addUser;
window.getUser = getUser;
window.updateUser = updateUser;
window.deleteUser = deleteUser;
