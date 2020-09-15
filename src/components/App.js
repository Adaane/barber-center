import React, { useState, useEffect }from 'react';
import './App.css';
import firebase from 'firebase';

import data from '../data.json'
import Grid from './Grid';
import Form from './Form';

function App() {

  const [item] = useState(data);

  useEffect(() => {
    return () => {
      firebase.initializeApp({
        apiKey: "AIzaSyDZq-KMxxSUiu488oeaO8ym_3QBNljHClU",
        authDomain: "barber-center-5f3c7.firebaseapp.com",
        databaseURL: "https://barber-center-5f3c7.firebaseio.com",
        projectId: "barber-center-5f3c7",
        storageBucket: "barber-center-5f3c7.appspot.com",
        messagingSenderId: "969380377435",
        appId: "1:969380377435:web:20fba16fe9a66e0e50a07e",
        measurementId: "G-P2KXQNCDPL"
      })
    }
  }, [])

  return (
   <>
    <div className="navbar-fixed">
      <nav className="blue lighten-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">Contact</a>
        </div>
      </nav>
    </div>
    <div>
    <Form />
      <Grid item={item}/>
    </div>
   </>
  );
}

export default App;
