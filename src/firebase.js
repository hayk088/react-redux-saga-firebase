import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from './config/firebase';
export const firebase_app = firebase.initializeApp(firebaseConfig);
