import React from 'react';
import './App.css';
import logo from '../../pen.png'
import mountain from '../../mountain5.jpeg'
import Pokeapi from '../../util/Pokeapi';
import Navbar from '../Navbar/Navbar';
import { Parallax } from 'react-parallax';

function App() {
  return (
      <div className="App">
        <Navbar />

        <div className = "even cali display" style = {{paddingTop: 160, paddingBottom: 60}}>
          writing, simplified.
        </div>

        <Parallax className = "wide" blur={{min: -15, max: 15}} bgImage= {mountain} bgImageAlt="the cat" strength={-300}>

        </Parallax>
        <Pokeapi />
      </div>
    
  );
}

export default App;
