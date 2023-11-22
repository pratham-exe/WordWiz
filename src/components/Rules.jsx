import React, { useState } from "react";
import "./Rules.css";
import CloseIcon from '@mui/icons-material/Close';

function Rules() {
  const [rules, setRules] = useState(false);

  function updateRules() {
    setRules(!rules);
  }

  return (
    <>
      <button onClick={updateRules} className="btn-rules">Rules</button>
      {rules && (
        <div className="rules">
          <div onClick={updateRules} className="overlay"></div>
          <div className="rules-content">
            <h2>How to play</h2>
            <hr />
            <p className="rule">
              Guess opponent word in 5 tries. 
              <ul>
               <li>Each guess must be a valid 5-letter word.</li>
               <li>The color of the tiles will change to show how close your guess is to the word.</li>
               <li>The green tile represents that the letter is the correct letter and is present at the correct spot.</li>
               <li>The yellow tile represents that the letter is in the word but is present at the wrong spot.</li>
              </ul>
            </p>
            <button className="close-rules" onClick={updateRules}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Rules;
