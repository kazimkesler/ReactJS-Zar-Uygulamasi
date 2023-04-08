import React from "react";
import { useState, useEffect } from "react";

export default function App(props) {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(2);
    const [win, setWin] = useState(false);

    const roll = () => {
        setDice1(Math.floor(Math.random() * 7));
        setDice2(Math.floor(Math.random() * 7));
    };

    useEffect(() => {
        if (dice1 === dice2)
            setWin(true);
    }, [dice1, dice2]);

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

