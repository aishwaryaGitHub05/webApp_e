import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCtKsTuWnEJx2DLNFmqsIVGUTj9pUKWNAo",
    authDomain: "e-app-05.firebaseapp.com",
    databaseURL: "https://e-app-05.firebaseio.com",
    projectId: "e-app-05",
    storageBucket: "e-app-05.appspot.com",
    messagingSenderId: "1081707681389",
    appId: "1:1081707681389:web:efd775a6e88b3c93589164",
    measurementId: "G-7MJFVBEQDS"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
