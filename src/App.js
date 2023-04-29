import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';

export default function App() {
  const [diceNum, setDiceNum] = React.useState(allNewDice());
  function allNewDice() {
    const Array = [];
    for (let i = 0; i < 10; i++) {
      Array.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      });
    }
    return Array;
  }
  function holdDice(id) {
    diceElement.map((dice) => {});
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
    setDiceNum(allNewDice());
  }

  return (
    <div className="container">
      <main className="main">
        <div className="die-container">{diceElement}</div>
        <button onClick={handleClick}>Roll</button>
      </main>
    </div>
  );
}
