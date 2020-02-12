import React, { useState, useEffect } from 'react';
import Square from './Square'
import './App.css';

function Board() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [content, setContent] = useState({ type: true })
  const [squ, setSqu] = useState({ squares: Array(9).fill(null), con : false })

  useEffect(() => {
    checkWinnerHandler();
  });
  const changeType = () => {
    content.type === true ?
      setContent({ type: false }) :
      setContent({ type: true })
  }
  const squHandler = (ind) => {
    const squs = [...squ.squares];
    content.type ?
      squs[ind] = 'X' :
      squs[ind] = 'O'

    setSqu({ squares: squs });
  }
  const checkWinnerHandler = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squ.squares[a] && squ.squares[a] === squ.squares[b] && squ.squares[a] === squ.squares[c]) {
        console.log(squ.squares[a]);
        setSqu({ squares: squ , con : true })
        return squ.squares[a];
      }
    }
  
  }
  const winner = checkWinnerHandler();
  return (
    <div>
    <div className='container'>
      {arr.map((index) => <Square
        index={index} Value={content.type}
        clicked={changeType}
        ind={squHandler}
        continue = {squ.con}
      />)}
    </div>
      {winner ? <p>player {winner} won the game </p> :''}
    </div>
  );
}

export default Board;
