import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDH7HYpJZsonr3lHg-wvUKkplRu3GTTXQ",
  authDomain: "not-redux-clone.firebaseapp.com",
  projectId: "not-redux-clone",
  storageBucket: "not-redux-clone.appspot.com",
  messagingSenderId: "829428366777",
  appId: "1:829428366777:web:1d16ba50af784c06c84a68",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
