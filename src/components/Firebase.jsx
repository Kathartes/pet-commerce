import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_9nv6MKOu2gx4zNL1Nn-ZQ_Uv0StPo5U",
    authDomain: "pet-clones.firebaseapp.com",
    projectId: "pet-clones",
    storageBucket: "pet-clones.appspot.com",
    messagingSenderId: "555607547990",
    appId: "1:555607547990:web:8d923536f46c0da33b9bf7"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };