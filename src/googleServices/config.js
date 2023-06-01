import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyQzqXba3iFC6Q86eF1XEbRGo5AiHJOZo",
  authDomain: "maison-de-villa.firebaseapp.com",
  projectId: "maison-de-villa",
  storageBucket: "maison-de-villa.appspot.com",
  messagingSenderId: "683137196077",
  appId: "1:683137196077:web:ba82e6f346528dcf98d8a4",
  measurementId: "G-E7NL1V83KD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
