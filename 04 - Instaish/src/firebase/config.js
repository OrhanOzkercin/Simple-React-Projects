import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCmMK_wh7Zy8UrSOLKLMq49ntYFNP8dQsw',
	authDomain: 'instaish-6d1c3.firebaseapp.com',
	databaseURL: 'https://instaish-6d1c3.firebaseio.com',
	projectId: 'instaish-6d1c3',
	storageBucket: 'instaish-6d1c3.appspot.com',
	messagingSenderId: '31395326246',
	appId: '1:31395326246:web:79bff1bad65b8733eef9e7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
