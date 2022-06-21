import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMKjvW8hjEo9aJaFllG27NWnp6-QmZvGw",
  authDomain: "redux-clone-not.firebaseapp.com",
  projectId: "redux-clone-not",
  storageBucket: "redux-clone-not.appspot.com",
  messagingSenderId: "251073707661",
  appId: "1:251073707661:web:472aebde3acaefa9e96cc4",
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
