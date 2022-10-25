import React from "react";
import logo from '../../pen.png'

export default function Navbar() {
  return (
    <div className="even" style = {{height: 40, paddingTop: 50}}>

      <div className = "even" style = {{gap: 10}}> 
        <div className = "avenir title">
          Website Title
        </div>
        <img src = {logo} className = "small-img"/>
      </div>

      <div className = "even" style = {{gap: 100}}>
        <div className = "avenir header">
          About
        </div>
        <div className = "avenir header">
          Editor
        </div>
      </div>
    </div>
  );
}