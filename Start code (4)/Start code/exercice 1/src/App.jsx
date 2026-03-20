import React from "react";
import {useState} from 'react'

export default function App() {
  const [value , setValue] = useState(0)
  const getScoreBarStyle = () => {
    // 1- Compute width
    //one score is 100%/10=>10% per score
    let score = value*10
    const scoreWidth = `${score}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={value} onChange={(e)=>setValue(e.target.value)}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
