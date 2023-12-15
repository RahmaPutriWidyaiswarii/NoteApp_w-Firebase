// Mengimpor modul utama dari firebase
import firebase from "firebase/compat/app";
// Mengimpor modul otentikasi dari Firebase.
import "firebase/compat/auth";
// Mengimpor modul Firestore dari Firebase
import "firebase/compat/firestore";
// Mengimpor modul database dari Firebase
import "firebase/compat/database";

// Inisialisasi Firebase dengan konfigurasi yang sudah kita buat pada consoole.firebase
firebase.initializeApp({
  apiKey: "AIzaSyD-j4SuDybtwvDkXGQ3k9KzYDMNwChA5Lo",
  authDomain: "terserah-43cb9.firebaseapp.com",
  databaseURL: "https://terserah-43cb9-default-rtdb.firebaseio.com",
  projectId: "terserah-43cb9",
  storageBucket: "terserah-43cb9.appspot.com",
  messagingSenderId: "317840675325",
  appId: "1:317840675325:web:7c79ca27e04d88e81e8994"});

  // Mendeklarasikan konstanta FIREBASE yang menyimpan instance Firebase yang telah diinisialisasi
const FIREBASE = firebase;

// Mengeskpor FIREBASE sehingga bisa digunakan pada file lain yang mengimpor modul ini
export default FIREBASE;
