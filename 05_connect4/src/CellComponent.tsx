import React from 'react';

interface ICellProps {
  value: number;
}

interface ICellState {
  token?: string;
}

class Cell extends React.Component<ICellProps, ICellState> {

  constructor(props: ICellProps) {
    super(props);
    let token = "🟡"
    if ((this.props.value % 2) == 1) {
      token = "🔴"
    }
    this.state = {
      token: token 
    };
  }

  character() {
    return this.state.token
  }

  onClick() {
    let token = this.state.token
    if (token == "🟡") {
      token = "🔴"
    } else {
      token = "🟡"
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
