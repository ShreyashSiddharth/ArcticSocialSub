import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZn308KZh2oij3gBv8hlyaZniHCN9-He4",
    authDomain: "linkedin-clone-b902f.firebaseapp.com",
    projectId: "linkedin-clone-b902f",
    storageBucket: "linkedin-clone-b902f.appspot.com",
    messagingSenderId: "289492329563",
    appId: "1:289492329563:web:fcadfdbbe530b6362b4b7e",
    measurementId: "G-JDV551S4SW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebaseApp.auth();

export {db, auth};