import React from 'react';
import BoardComponent from './BoardComponent';
import { Board } from './Board'
import { Player, RedPlayer, YellowPlayer} from './Player'

interface IGameProps {
  title: string
}

interface IGameState {
  width: number,
  height: number,
  board : Board,
  players: [Player, Player],
  player: number
}

class GameComponent extends React.Component<IGameProps, IGameState> {
  width = 7
  height = 6

  constructor(props: IGameProps) {
    super(props);
    let board = new Board(this.width, this.height)
    
    /*board.reset([
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,1,2,2,2,0,0],
    ])*/
    this.state = {
      width: this.width,
      height: this.height,

      board : board,
      players : [new RedPlayer(), new YellowPlayer()],
      player: 0,
    };
  }

/*  Header() {
    return (
      <header className="header">
        <h1>Connect4</h1>
      </header>
    )
  }
  */
  /*Content() {
    return (
    )    
  }*/
  /*
  Footer() {
    return (
        <footer className="footer">
            <small>© 2022 Chris Guest</small>
        </footer>
    )   
  }
  */
  render() {
    return (
      <div>
        <div className="game">
          <BoardComponent board={ this.state.board } players={ this.state.players } player={ this.state.player } /> 
        </div>
      </div>
    );
  }
}

export default GameComponent;
