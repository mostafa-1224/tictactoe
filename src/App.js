import React from 'react';
import Board from './Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>XO - Game</h1>
      <h3> Player One X </h3>
      <h3> Player Two O </h3>
      <Board />
    </div>
  );
}

export default App;
