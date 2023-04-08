import React from "react";
import { useState, useEffect } from "react";

export default function App(props) {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(2);
    const [win, setWin] = useState(false);

    const roll = () => {
        const dice1Value = Math.floor(Math.random() * 7)
        const dice2Value = Math.floor(Math.random() * 7)
        setDice1(dice1Value);
        setDice2(dice2Value);
        if (dice1Value === dice2Value)
            setWin(true);
    };

    return (
        <div>
            <h1>zar1: {dice1}</h1>
            <h1>zar2: {dice2}</h1>
            {!win
                ? <button onClick={roll}>
                    Dene
                </button>
                : <Win win={win} />}
        </div>
    );
}

function Win() {
    return <div>Kazandın</div>;
}

