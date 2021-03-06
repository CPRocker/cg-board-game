import React from 'react';

const Players = ({ players }) => (
  <div className="players">
    {
      players.map(player => (
        <div 
          className="player"
          key={player.number}>
          <p>Player {player.number}</p>
          <img
            className="player-pawn"
            alt={player.pawn}
            src={`./pawns/${player.pawn}-pawn.png`} />
          <p className="player-score">{player.score}</p>
        </div>
      ))
    }
  </div>
);

export default Players;
