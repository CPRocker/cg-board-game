import React, { Component } from 'react';
import './App.css';
import PlayerSelect from './containers/PlayerSelect';

class App extends Component {
  state = {
    players: [],
    gameStarted: false
  };

  startGame = (players) => {
    // starts game
  }

  render() {
    return (
      <div className="App">
        <PlayerSelect startGame={this.startGame} />
      </div>
    );
  }
}

export default App;
