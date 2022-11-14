import React, {useState} from "react";
import { useEffect, useRef } from "react";

export default function Field() {
  const [Text, setText] = useState("");
  const [Submitted, setSubmitted] = useState("");

  useEffect(() => {
    if(Submitted !== "") {
      alert(Submitted);
    }
  }, [Submitted])

  const UpdateText = (e) => {
    setText(e.target.value);
  }

  const Submit = (e) => {
    if (e.key === 'Enter') {
      setSubmitted(Text);
      setText("");
      e.preventDefault();
       /* no actual line enter */
    }
  }

  return (
    <div className = "even" style = {{paddingTop: 30}} > 
      <textarea className = "body calibold txtinput boxinput round-border background-color" 
        value = {Text} onChange = {UpdateText} onKeyDown={Submit} placeholder = "It was a dark and stormy night..."/>
    </div>
  );
  
}
