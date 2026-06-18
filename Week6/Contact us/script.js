import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function getFormData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    date: document.getElementById("date").value,
  };
}

function addContact() {
  const contactId = document.getElementById("contactId").value;

  set(ref(db, "contacts/" + contactId), getFormData()).then(() => {
    document.getElementById("result").innerText = "Contact added successfully";
  });
}

function readContact() {
  const contactId = document.getElementById("contactId").value;

  get(ref(db, "contacts/" + contactId)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();

      document.getElementById("name").value = data.name;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      document.getElementById("address").value = data.address;
      document.getElementById("city").value = data.city;
      document.getElementById("country").value = data.country;
      document.getElementById("subject").value = data.subject;
      document.getElementById("message").value = data.message;
      document.getElementById("date").value = data.date;

      document.getElementById("result").innerText =
        "Contact fetched successfully";
    } else {
      document.getElementById("result").innerText = "No contact found";
    }
  });
}

function updateContact() {
  const contactId = document.getElementById("contactId").value;

  update(ref(db, "contacts/" + contactId), getFormData()).then(() => {
    document.getElementById("result").innerText =
      "Contact updated successfully";
  });
}

function deleteContact() {
  const contactId = document.getElementById("contactId").value;

  remove(ref(db, "contacts/" + contactId)).then(() => {
    document.getElementById("result").innerText =
      "Contact deleted successfully";
  });
}

window.addContact = addContact;
window.readContact = readContact;
window.updateContact = updateContact;
window.deleteContact = deleteContact;
