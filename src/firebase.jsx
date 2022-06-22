import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnNRxdq-V50iEse9NDljS2N1PG0FDlRyA",
  authDomain: "redux-new-clone-yt.firebaseapp.com",
  projectId: "redux-new-clone-yt",
  storageBucket: "redux-new-clone-yt.appspot.com",
  messagingSenderId: "573083812289",
  appId: "1:573083812289:web:4c9c5226993eef407b6f40",
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth;
