import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

//need to know the active player to update the game board. 
//need to update the active player when a square is selected. 
//Based upon the active player, we can determine the symbol to update on the game board. 
//Basaed upon the active player we also want to set an active class on the player. 




function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
