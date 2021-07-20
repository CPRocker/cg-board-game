import React, { Component } from 'react';

import Players from '../components/Players';

class PlayerSelect extends Component {
  state = {
    pawns: ['angular', 'js', 'react', 'vue'],
    currentPlayerSelect: 1,
    players: []
  };

  setPlayer = (pawn) => {
    if(this.state.players.find(player => player.pawn === pawn)) {
      alert('Looks like you two know what is best. No need to play!');
    } else {
      this.setState((prevState) => ({
        currentPlayerSelect: prevState.currentPlayerSelect,
        players: [
          ...prevState.players, {
            number: prevState.currentPlayerSelect,
            pawn
          }
        ]
      }), () => {
        // now we know state is the latest...
        if (this.state.players.length === 2) {
          this.props.startGame(this.state.players);
        }
      });
    }
  }

  startGame = () => {
    this.props.startGame(this.state.players);
  }

  render() {
    return (
      this.state.readyToStart ? 
      <React.Fragment>
        <h1>Click Start to Begin!</h1>
        <button 
          onClick={this.startGame} className="start-button">Start</button>
      </React.Fragment> :
      <React.Fragment>
        <Players players = {this.state.players} />
        <h1>Player {this.state.currentPlayerSelect}, Select a Pawn:</h1>
        {
          this.state.pawns.map(pawn => (
            <div className="pawn-container" key={pawn} onClick={() => this.setPlayer(pawn)} >
              <img
                className="pawn"
                alt={pawn}
                src={`./pawns/${pawn}-pawn.png`} />
              <img
                className="pawn-logo"
                alt={pawn}
                src={`./logos/${pawn}-pawn.png`} />
            </div>
          ))
        }
      </React.Fragment>
    );
  }
}

export default PlayerSelect;
