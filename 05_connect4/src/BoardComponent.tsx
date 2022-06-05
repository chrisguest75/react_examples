import React from 'react';
import Cell from './CellComponent';

class BoardComponent extends React.Component {
  createBoard = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 6; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 7; j++) {
        children.push(<Cell value={ (i * j) } />)
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

export default BoardComponent;
