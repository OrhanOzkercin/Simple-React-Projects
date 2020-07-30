import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { FirebaseConfig } from './firebaseConfig';

// Your web app's Firebase configuration
const firebaseConfig = FirebaseConfig;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
