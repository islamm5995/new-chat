import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCzPoYsmdGpiioKqCFc8BlkQyqRRsfKPuI",
    authDomain: "new-chat-87176.firebaseapp.com",
    projectId: "new-chat-87176",
    storageBucket: "new-chat-87176.appspot.com",
    messagingSenderId: "719525989257",
    appId: "1:719525989257:web:5d19194542b834669aaf58",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
