import React from 'react';
import { Counters } from "./Board";

interface ICellProps {
  value: number;
  //onclick: React.MouseEvent<HTMLElement>;
}

interface ICellState {
  token: Counters;
}

class Cell extends React.Component<ICellProps, ICellState> {

  constructor(props: ICellProps) {
    super(props);
    this.state = {
      token: this.props.value
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

  onClick() {
    let token = this.state.token

    if (token == Counters.None) {
      token = Counters.Red
    } 

    this.setState((state) => ({
      token: token
    }));    
  }

  render() {
    return (
      <div className="cell">
        <button className="token" onClick={() => this.onClick()}>
          { this.character() }
        </button>
      </div>
    );
  }
}

export default Cell;
