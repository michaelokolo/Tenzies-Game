import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
  const [diceNum, setDiceNum] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = diceNum.every((dice) => dice.isHeld);
    const firstValue = diceNum[0].value;
    const allSameValue = diceNum.every((dice) => dice.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [diceNum]);
  function allNewDice() {
    const Array = [];
    for (let i = 0; i < 10; i++) {
      Array.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return Array;
  }
  function holdDice(id) {
    setDiceNum((preDice) =>
      preDice.map((dice) =>
        id === dice.id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  }
  const diceElement = diceNum.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={holdDice}
      id={dice.id}
    />
  ));

  console.log(diceElement);

  function handleClick() {
    setDiceNum((preDice) =>
      preDice.map((dice) =>
        dice.isHeld
          ? { ...dice }
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            }
      )
    );
  }

  function handleNew() {
    setDiceNum(allNewDice());
    setTenzies(false);
  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instruction">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">{diceElement}</div>
        {tenzies ? (
          <button onClick={handleNew}>New Game</button>
        ) : (
          <button onClick={handleClick}>Roll</button>
        )}
        {tenzies && <Confetti />}
      </main>
    </div>
  );
}
