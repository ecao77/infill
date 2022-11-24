import React from 'react';
import '../App/App.css';

import Navbar from '../Navbar/Navbar';
import Field from '../Field/Field';
import LMapi from '../../util/LMapi'

export default function Editor() {
    return (
        <div>
            <Navbar />
            <div className = "left-align even cali header" style = {{paddingTop: 120, paddingBottom: 30, width: "10%"}}>
                Editor
            </div>
            <div className = "left-align even cali body" style = {{paddingBottom: 0, "width": "50%"}}>
                To format a sentence, replace the word to be switched with a [MASK] token .
            </div>
            <Field />
            <div className = "left-align even cali header" style = {{paddingTop: 120, paddingBottom: 30, width: "10%"}}>
                Results
            </div>
            <LMapi />
        </div>
    );
}