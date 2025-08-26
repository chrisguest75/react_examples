import React from 'react';
import { Board, Counters } from "./Board";

interface ICellProps {
  board: Board;
  x: number;
  y: number;
  handleClick: any;
}

interface ICellState {
  token: Counters;
}

class Cell extends React.Component<ICellProps, ICellState> {

  constructor(props: ICellProps) {
    super(props);
    const x = this.props.x
    const y = this.props.y
    const state: Array<Array<number>> = props.board.state()
    this.state = {
      token: state[y][x]
    };
  }

  character() {
    let character = " "
    switch(this.state.token) {
      case Counters.None:
        character = " "
        break
      case Counters.Red:
        character = "🔴"
        break
      case Counters.Yellow:
        character = "🟡"
        break
    }

    return character
  }

  /*onClick() {
    let token = this.state.token

    if (token == Counters.None) {
      token = Counters.Red
    } 

    this.setState((state) => ({
      token: token
    }));    


    onClick={MouseEventHandler<HTMLButtonElement>(x:number, y:number) => this.props.handleClick(this.props.x, this.props.y)}


    React.MouseEventHandler<HTMLButtonElement>
  }*/

  render() {
    return (
      <div className="cell">
        <button className="token" onClick={ () => this.props.handleClick() }>
          { this.character() }
        </button>
      </div>
    );
  }
}

export default Cell;
