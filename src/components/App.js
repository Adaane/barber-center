import React, { useState, useEffect }from 'react';
import './App.css';
import firebase from '../firebase';

import Grid from './Grid';
import Form from './Form';

function App() {

  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
      updateData()
  }, [])

  const updateData = () => {
    const db = firebase.firestore();

    db.collection('barbers').get()
    .then((snapshot) => {
      let barbers = [];

      snapshot.forEach((item) => {
        let barber = Object.assign({id: item.id}, item.data());
        barbers.push(barber)
      });

      setBarbers(barbers)
    })
    .catch((err) => {
      console.log('Erreur : ', err);
    })
  }

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
      <Grid item={barbers}/>
    </div>
   </>
  );
}

export default App;
