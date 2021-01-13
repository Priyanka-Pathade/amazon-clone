import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFlN0CwZzPYyjwPmKuPBiM9Tzv5_o_L5g",
    authDomain: "clone-e9c03.firebaseapp.com",
    projectId: "clone-e9c03",
    storageBucket: "clone-e9c03.appspot.com",
    messagingSenderId: "913595350647",
    appId: "1:913595350647:web:115b5a9ec788ee945d1072",
    measurementId: "G-K3WY2Y0NV4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};