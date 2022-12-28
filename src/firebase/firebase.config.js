// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB734Qqh8uT9Eif5ueRIUro_Wp4ONDwIbM",
    authDomain: "task-management-c271f.firebaseapp.com",
    projectId: "task-management-c271f",
    storageBucket: "task-management-c271f.appspot.com",
    messagingSenderId: "624716056262",
    appId: "1:624716056262:web:07cb10a56284cc4ea2b9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;