import React, { useState, useEffect }from 'react';
import logo from '../logo.svg';
import './App.css';
import firebase from 'firebase';

import data from '../data.json'

function App() {

  useState(data);

  useEffect(() => {
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

    return () => {
      
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
