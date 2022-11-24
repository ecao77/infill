import React from 'react';
import './App.css';
import mountain from '../../mountain4.jpeg'
import Navbar from '../Navbar/Navbar';
import { Parallax } from 'react-parallax';

function App() {
  return (
      <div className="App">
        <Navbar />

        <div className = "even cali display" style = {{paddingTop: 160, paddingBottom: 60}}>
          writing, simplified.
        </div>
        <div className = "even cali display" style = {{paddingTop: 160, paddingBottom: 60}}>
          more!
        </div>

        <Parallax className = "wide" blur={{min: -5, max: 5}} bgImage= {mountain} bgImageAlt="the cat" strength={-500}>

        </Parallax>

        <div className = "even cali display" style = {{paddingTop: 160, paddingBottom: 60}}>
          more!
        </div>
        <div className = "even cali display" style = {{paddingTop: 160, paddingBottom: 60}}>
          more!
        </div>
      </div>
    
  );
}

export default App;
