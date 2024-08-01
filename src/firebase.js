import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTw015rqqnuLB_diWcKPY7Axi7sDfpBbM",
  authDomain: "tird-68eea.firebaseapp.com",
  projectId: "tird-68eea",
  databaseURL: "https://tird-68eea-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "tird-68eea.appspot.com",
  messagingSenderId: "442810936761",
  appId: "1:442810936761:web:2cb771bd3d86bc83d75a68",
  measurementId: "G-TM4LXPLKTJ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
