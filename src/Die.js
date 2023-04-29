import React from 'react';

function Die(props) {
  return (
    <p
      style={{ backgroundColor: props.isHeld ? '#59E391' : 'white' }}
      className="num"
      onClick={() => props.holdDice(props.id)}
    >
      {props.value}
    </p>
  );
}

export default Die;
