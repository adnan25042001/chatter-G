import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEgBhPZ4Vkw2_nv4BU0CtSlUwou5CRCDU",
    authDomain: "fir-chat-app-a46a4.firebaseapp.com",
    projectId: "fir-chat-app-a46a4",
    storageBucket: "fir-chat-app-a46a4.appspot.com",
    messagingSenderId: "412238685423",
    appId: "1:412238685423:web:77382b7e04183800d0271a",
    measurementId: "G-7GJ9JKHD2V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
