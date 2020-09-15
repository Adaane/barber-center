 import firebase from 'firebase';
 import 'firebase/firestore';

 const config = {
    apiKey: "AIzaSyDZq-KMxxSUiu488oeaO8ym_3QBNljHClU",
    authDomain: "barber-center-5f3c7.firebaseapp.com",
    databaseURL: "https://barber-center-5f3c7.firebaseio.com",
    projectId: "barber-center-5f3c7",
    storageBucket: "barber-center-5f3c7.appspot.com",
    messagingSenderId: "969380377435",
    appId: "1:969380377435:web:20fba16fe9a66e0e50a07e",
    measurementId: "G-P2KXQNCDPL"
  }

  firebase.initializeApp(config)

  export default firebase;

