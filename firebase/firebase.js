import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAEgBhPZ4Vkw2_nv4BU0CtSlUwou5CRCDU",
//     authDomain: "fir-chat-app-a46a4.firebaseapp.com",
//     projectId: "fir-chat-app-a46a4",
//     storageBucket: "fir-chat-app-a46a4.appspot.com",
//     messagingSenderId: "412238685423",
//     appId: "1:412238685423:web:77382b7e04183800d0271a",
//     measurementId: "G-7GJ9JKHD2V",
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
