import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Pokeapi from '../../util/Pokeapi';
import Navbar from '../Navbar/Navbar';
import Field from '../Field/Field';
import Home from '../Home/Home';


function App() {
  return (
    <Router>
      <div className="App">

        <Link to="/home"> Home </Link>
        <Link to="/"> Home </Link>
      
        <Navbar />
        <div className = "even cali display" style = {{paddingTop: 160, paddingBottom: 60}}>
          writing, simplified.
        </div>

        <Field />
        <Pokeapi />
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/home' element = {<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
