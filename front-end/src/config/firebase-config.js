import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhTem4BrLkOanFgvVTw5F1wAsf3OTNeQg",
  authDomain: "prototypecreateandpost.firebaseapp.com",
  projectId: "prototypecreateandpost",
  storageBucket: "prototypecreateandpost.appspot.com",
  messagingSenderId: "391427357150",
  appId: "1:391427357150:web:211324991804f4e369054f",
  measurementId: "G-G8JHDXYH2Z"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app.name);
