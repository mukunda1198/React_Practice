// src/Game.js
import React, { useState } from 'react';
import GameBoard from './GameBoard';

const ladders = {
  2: 22,
  8: 26,
  20: 29,
  41: 79,
  54: 67,
  63: 81,
  76: 97,
};

const snakes = {
    32: 10,
    36: 6,
    48: 26,
    62: 18,
    88: 24,
    95: 56,
    99: 78,
  };

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const Game = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [diceRoll, setDiceRoll] = useState(null);

    const handleRollDice = () => {
      const roll = rollDice();
      setDiceRoll(roll);
      let newPosition = playerPosition + roll;

      if (newPosition > 100) {
        newPosition = playerPosition;
      } else if (ladders[newPosition]) {
        newPosition = ladders[newPosition];
      } else if (snakes[newPosition]) {
        newPosition = snakes[newPosition];
      }

      setPlayerPosition(newPosition);
    };

    return (
      <div>
        <GameBoard />
        <div className="controls">
          <button onClick={handleRollDice}>Roll Dice</button>
          {diceRoll && <p>Dice Roll: {diceRoll}</p>}
          <p>Player Position: {playerPosition}</p>
        </div>
      </div>
    );
  };

  export default Game;
