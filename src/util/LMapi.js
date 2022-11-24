import React, { useState, useEffect } from "react";
import axios from "axios";
export default function LMapi() {

  const [txt, setText] = useState("");

  const nothing = (e) => {
  }

  useEffect(() => {
    /* async await */
    async function getData() {
      let res = await axios.get(`https://cors-anywhere.herokuapp.com/model-r2isjagx4a-uc.a.run.app/`);
      console.log(res.data.message);
      setText(res.data.message);
    }

    getData();
  }, []);

  return (
    <>
        <div className = "even" style = {{paddingTop: 30}} > 
            <textarea className = "body calibold txtinput boxinput round-border background-color" 
            value = {txt} onChange = {nothing} readOnly />
        </div>
  
    </>
  );
}