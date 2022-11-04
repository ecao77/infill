import React from "react";
import logo from '../../pen.png'
import {Link} from "react-router-dom";
import styled from 'styled-components';

const SLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: black;
  }
`;

export default function Navbar() {
  return (
    <div className="even" style = {{height: 40, paddingTop: 50}}>
      <SLink to = '/' className = "even" style = {{gap: 10}}> 
        <div className = "avenir title">
          Website Title
        </div>
        <img src = {logo} className = "small-img"/>
      </SLink>

      <div className = "even" style = {{gap: 100}}>
            <SLink to = "/about" className = "avenir header">
              About
            </SLink>
            <SLink to = "/editor" className = "avenir header">
              Editor
            </SLink>
      </div>
    </div>
  );
}
