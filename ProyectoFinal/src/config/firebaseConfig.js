import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXdPImT7K9pZlsS-yJHxJGUgd04BArtFk",
  authDomain: "cursoreact-60995.firebaseapp.com",
  projectId: "cursoreact-60995",
  storageBucket: "cursoreact-60995.appspot.com",
  messagingSenderId: "26851525201",
  appId: "1:26851525201:web:4bf60e6c5b15734059ae70",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
