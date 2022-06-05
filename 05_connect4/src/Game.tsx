import React from 'react';
import Board from './Board';

class Game extends React.Component {
  width = 7
  height = 5

  // TODO: type of props
  constructor(props: any ) {
    super(props);
    this.state = {
      width: this.width,
      height: this.height,
      grid: Array(this.width*this.height).fill(null),
    };
  }

  render() {
    return (
      <div className="game">
        <Board /> 
      </div>
    );
  }
}

export default Game;
