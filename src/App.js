import React, { Component } from 'react';
import './App.css';

import Players from './components/Players';

import GameBoard from './containers/GameBoard';
import PlayerSelect from './containers/PlayerSelect';

class App extends Component {
  state = {
    players: [],
    gameStarted: false
  };

  startGame = (players) => {
    this.setState({
      players: players.map(player => ({
        ...player,
        location: 0,
        score: 0
      })),
      gameStarted: true
    });
  }

  render() {
    return (
      <div className="App">
        <Players players = { this.state.players } />
        {
          this.state.gameStarted ?
          <GameBoard players = { this.state.players } /> :
          <PlayerSelect startGame={this.startGame} />
        }
      </div>
    );
  }
}

export default App;
