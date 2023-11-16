import React from "react";
import "./Scorecard.css";

function Scorecard() {
  return (
    <div>
      <div id="score-card">
        <h3 className="statistics">Wins : </h3>
        <h3 className="statistics">Loss : </h3>
        <h3 className="statistics">Draws : </h3>
      </div>
    </div>
  )
}

export default Scorecard;
