import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: "AIzaSyDhsA8GmOEYlrOkWQNNBrhkZOOOJLx0wuk",
	authDomain: "dallacosta-shop.firebaseapp.com",
	projectId: "dallacosta-shop",
	storageBucket: "dallacosta-shop.appspot.com",
	messagingSenderId: "438557493874",
	appId: "1:438557493874:web:d331fad234eafdd6e390eb"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
