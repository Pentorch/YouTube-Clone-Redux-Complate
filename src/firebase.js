import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBds3YArPHBjHb4Q-bnPMEDVZMvf9UFkXI",
  authDomain: "redux-new-clone-yt.firebaseapp.com",
  projectId: "redux-new-clone-yt",
  storageBucket: "redux-new-clone-yt.appspot.com",
  messagingSenderId: "573083812289",
  appId: "1:573083812289:web:4c9c5226993eef407b6f40",
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
