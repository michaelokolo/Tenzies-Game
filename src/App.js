import React from 'react';
import Die from './Die';

export default function App() {
  function allNewDice() {
    const Array = [];
    for (let i = 0; i < 10; i++) {
      Array.push(Math.floor(Math.random() * 6));
    }
    return Array;
  }
  console.log(allNewDice());

  return (
    <div className="container">
      <main className="main">
        <div className="die-container">
          <Die value={1} />
          <Die value={5} />
          <Die value={3} />
          <Die value={1} />
          <Die value={4} />
          <Die value={6} />
          <Die value={2} />
          <Die value={4} />
          <Die value={6} />
          <Die value={1} />
        </div>
      </main>
    </div>
  );
}
