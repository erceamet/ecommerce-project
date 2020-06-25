import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJJtAxZysgynguNKCQTmkKzhVFu6w2578",
  authDomain: "ecommerce-project-25c3e.firebaseapp.com",
  databaseURL: "https://ecommerce-project-25c3e.firebaseio.com",
  projectId: "ecommerce-project-25c3e",
  storageBucket: "ecommerce-project-25c3e.appspot.com",
  messagingSenderId: "771562389612",
  appId: "1:771562389612:web:e0591173e46593386f1849",
  measurementId: "G-RFG8STYEX2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
