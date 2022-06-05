import React from 'react';
import Cell from './CellComponent';
import { Board, Counters } from "./Board";

interface IBoardProps {
  board : Board
}

interface IBoardState {
  board : Board
}

class BoardComponent extends React.Component<IBoardProps, IBoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      board: this.props.board
    };
  }

  createBoard = () => {
    let table = []

    let state: Array<Array<number>> = this.state.board.state()

    // Outer loop to create parent
    for (let i = 0; i < this.state.board.rows; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < this.state.board.columns; j++) {
        children.push(<Cell value={ state[i][j] } />)
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
