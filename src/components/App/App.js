import React from 'react';
import './App.css';

import Pokeapi from '../../util/Pokeapi.js'
import Navbar from '../Navbar/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "even cali display" style = {{paddingTop: 160}}>
        writing, simplified.
      </div>
      <Pokeapi />
    </div>
  );
}

export default App;
