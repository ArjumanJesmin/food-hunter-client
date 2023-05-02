// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_nY8bRKixfLTt-ZJLUb1wr80-nFkr8jM",
  authDomain: "chef-recipe-hunter-d5618.firebaseapp.com",
  projectId: "chef-recipe-hunter-d5618",
  storageBucket: "chef-recipe-hunter-d5618.appspot.com",
  messagingSenderId: "85722243631",
  appId: "1:85722243631:web:bff110eef240a1f6501cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app