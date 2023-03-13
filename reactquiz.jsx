
import React from "react";
import { useState, useEffect } from "react";

export default function App(props) {
  const [zar1, setZar1] = useState(1);
  const [zar2, setZar2] = useState(2);
  const [win, setWin] = useState(false);
  const check = () => {
    setZar1(Math.floor(Math.random() * 7));
    setZar2(Math.floor(Math.random() * 7));
  };

  useEffect(() => {
    if (zar1 === zar2)
     setWin(true);
  });

  const imageList=[
    "https://github.com/londonappbrewery/dicee-flutter/blob/master/images/dice1.png?raw=true",
    "https://github.com/londonappbrewery/dicee-flutter/blob/master/images/dice2.png?raw=true",
    "https://github.com/londonappbrewery/dicee-flutter/blob/master/images/dice3.png?raw=true",
    "https://github.com/londonappbrewery/dicee-flutter/blob/master/images/dice4.png?raw=true",
    "https://github.com/londonappbrewery/dicee-flutter/blob/master/images/dice5.png?raw=true",
    "https://github.com/londonappbrewery/dicee-flutter/blob/master/images/dice6.png?raw=true"];

  return (
    <div className="App">
      <h1>
        zar1: {zar1} 
        {/*<img  width="50" height="50" src={require(imageList[zar1-1])} alt="" /> */}
      </h1>
      <h1>
        zar2: {zar2}
        {/*<img  width="50" height="50" src={require(imageList[zar2-1])} alt="" /> */}
      </h1>
      {!win ? (
        <button onClick={() => check()}>
          Dene
        </button>
      ) : (
        <Win win={win} />
      )}
    </div>
  );
}

function Win(props) {
  return <div>Kazandın {props.win}</div>;
}

// Log to console
console.log("Hello console");
