import React from 'react';
import Cell from './CellComponent';
import { Board, Counters } from "./Board";
import { Player } from './Player'

interface IBoardProps {
  board : Board
  players: [Player, Player]
  player: number
}

interface IBoardState {
  board : Board
  players: [Player, Player]
  player: number
}

class BoardComponent extends React.Component<IBoardProps, IBoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      board: this.props.board,
      players: this.props.players,
      player: this.props.player
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
        children.push(<Cell key={`cell_${i}_${j}`} board={ this.state.board } x={j} y={i} handleClick={ this.handleClick } />)
      }
      //Create the parent and add the children
      table.push(<div key={`row_${i}`} className="row">{children}</div>)
    }
    return table
  }

  //handleClick(x:number, y:number) {
  handleClick() {
    const x = 0
    console.log(this)
    let coords = this.state.players[this.state.player].takeTurn(this.state.board, x);
  
    //evaluate if won
    if (this.props.board.winner(this.state.players[this.state.player].colour, coords)) {
      console.log(this.state.players[this.state.player].name + " wins");
    }

    this.setState((state) => ({
      player: (this.state.player + 1) % 2
    })); 
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
