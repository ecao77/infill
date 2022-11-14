import React from "react";

export default function Links() {
    
  return (
    <>
        <div>
          <a className = "left-align cali body" href="https://github.com/ecao77/infill" style = {{paddingTop: 120, paddingBottom: 400}}>Github</a>
        </div>

        <div>
        <a className = "left-align cali body" href="https://arxiv.org/pdf/1810.04805.pdf" style = {{paddingTop: 120, paddingBottom: 400}}> BERT (Devlin) </a>
        </div>

        <div>
          <a className = "left-align cali body" href="https://nlp.stanford.edu/pubs/donahue2020infilling.pdf" style = {{paddingTop: 120, paddingBottom: 400}}> Infilling (Donahue) </a>
        </div>

        <div>
          <a className = "left-align cali body" href="https://practicaltypography.com" style = {{paddingTop: 120, paddingBottom: 400}}> Web Design and Typography </a>
        </div>
    </>
  );
}