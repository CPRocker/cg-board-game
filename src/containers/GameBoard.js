import React, { Component } from 'react';

class GameBoard extends Component {
  state = {
    squares: [],
    grid_size: 5
  };

  componentDidMount() {
    const squares = this.createSquares();
    this.setState({
      squares
    });
  }

  createSquares() {
    const { players: [ player_1, player_2 ] } = this.props;
    const { grid_size } = this.state;

    const squares = [{
      row: 1,
      col: 1,
      type: 'start'
    }];

    let i = 0;
    let row = 1;
    let col = 2;
    let total_squares = (grid_size * 2 + (grid_size - 2) * 2);
    while(squares.length < total_squares) {
      const square = {
        row,
        col
      };

      if(i % 2 === 0) {
        square.type = player_1.pawn;
      } else {
        square.type = player_2.pawn;
      }

      if(i % 3 === 0) {
        square.type = 'face-off';
      }

      squares.push(square);
      i++;

      if(i < grid_size) {
        col++;
      } else if(i < 2 * grid_size - 1) {
        row++;
      } else if(i < 3 * grid_size - 2) {
        col--;
      } else {
        row--;
      }
    }

    return squares;
  }

  render() {
    const { grid_size } = this.state;
    const { players } = this.props;
    const playerLocations = players.map(player => (
      this.state.squares[player.location]
    ));

    return (
      <div className="game-board"
      style={{
        gridTemplate: `repeat(${grid_size}, 1fr)/repeat(${grid_size}, 1fr)`
      }}>
        {
          this.state.squares.map((square, i) => (
            <div
              style={{
                gridRow: square.row,
                gridColumn: square.col
              }}
              key={i} 
              className="game-square">
              {
                (square.type === 'start') ?
                'Rest due to JavaScript Fatigue' :
                <img 
                  src={`./images/${square.type}.png`}
                  alt={square.type} />
              }
            </div>
          ))
        }
        {
          playerLocations.map((location, i) => (
            <div 
              className="player-avatar">
              <img class="pawn" src="./pawns/angular-pawn.png"
              alt="player-avatar"/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default GameBoard;
