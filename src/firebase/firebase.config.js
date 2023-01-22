import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDI3PADa185FRmnf-g3DhLhjnmH2RpV38o",
    authDomain: "simple-firebase-authention-6.firebaseapp.com",
    projectId: "simple-firebase-authention-6",
    storageBucket: "simple-firebase-authention-6.appspot.com",
    messagingSenderId: "330124263523",
    appId: "1:330124263523:web:373698ae05bb277cd57856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;