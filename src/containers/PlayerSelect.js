import React, { Component } from 'react';

class PlayerSelect extends Component {
  state = {
    pawns: ['angular', 'js', 'react', 'vue'],
    currentPlayerSelect: 1,
    players: []
  };

  setPlayer = (pawn) => {
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

  render() {
    return (
      <React.Fragment>
        <div className="players">
          {
            this.state.players.map(player => (
              <div>
                <p>Player {player.number}</p>
                <img
                  className="player-pawn"
                  alt={player.pawn}
                  src={`./pawns/${player.pawn}-pawn.png`} />
              </div>
            ))
          }
        </div>
        <h1>Player {this.state.currentPlayerSelect}, Select a Pawn:</h1>
        {
          this.state.pawns.map(pawn => (
            <div className="pawnContainer" key={pawn} onClick={() => this.setPlayer(pawn)} >
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
