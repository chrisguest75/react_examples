import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
  createBoard = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 5; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 7; j++) {
        children.push(<Cell />)
      }
      //Create the parent and add the children
      table.push(<div className="row">{children}</div>)
    }
    return table
  }

  render = () => {
    return (
      <div className="board">
          {this.createBoard()}
      </div>
    );
  }
  
}

export default Board;
