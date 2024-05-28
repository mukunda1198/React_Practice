// src/GameBoard.js
import React from 'react';
import './GameBoard.css';

const GameBoard = () => {
  const boardSize = 10; // 10x10 board
  const cells = [];

  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const cellNumber = i * boardSize + j + 1;
      row.push(
        <div key={cellNumber} className="cell">
          {cellNumber}
        </div>
      );
    }
    cells.push(
      <div key={i} className="row">
        {row}
      </div>
    );
  }

  return <div className="board">{cells}</div>;
};

export default GameBoard;
