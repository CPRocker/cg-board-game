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
    while(col > 1 && row > 1) {
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

      if(row === 1 && col < grid_size) {
        col++;
      } else if(row === grid_size && col > 1) {
        col--;
      } else if(col === grid_size) {
        row++;
      } else if(col === 1) {
        row--;
      }
    }

    return squares;
  }

  render() {
    const { grid_size } = this.state;

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
              {square.type}
            </div>
          ));
        }
      </div>
    );
  }
}

export default GameBoard;
