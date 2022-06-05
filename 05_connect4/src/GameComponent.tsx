import React from 'react';
import BoardComponent from './BoardComponent';

class GameComponent extends React.Component {
  width = 7
  height = 6

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
        <BoardComponent /> 
      </div>
    );
  }
}

export default GameComponent;
