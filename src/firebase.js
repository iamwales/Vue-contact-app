import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  databaseURL: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
};

firebase.initializeApp(config);

export default firebase.database();
