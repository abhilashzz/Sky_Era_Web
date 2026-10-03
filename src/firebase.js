// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr_aN9BSy-8UDsQaupCkBJFotpqO6YpZ0",
  authDomain: "skyera-d3ec2.firebaseapp.com",
  projectId: "skyera-d3ec2",
  storageBucket: "skyera-d3ec2.firebasestorage.app",
  messagingSenderId: "83555468214",
  appId: "1:83555468214:web:7129fd8fa2777915273717",
  measurementId: "G-F0B4EKWHHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only in supported browser environments)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export { app, analytics };
export default app;
