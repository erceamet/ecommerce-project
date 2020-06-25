import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("2kaOBxwkp4g25IWiUg9G")
  .collection("cartItems")
  .doc("tZjDk7vqzrIHFbqGEVtM");

firestore.doc("/users/2kaOBxwkp4g25IWiUg9G/cartItems/tZjDk7vqzrIHFbqGEVtM");

firestore.collection("/users/2kaOBxwkp4g25IWiUg9G/cartItems");
