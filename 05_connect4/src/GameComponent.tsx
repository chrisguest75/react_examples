import React from 'react';
import BoardComponent from './BoardComponent';
//import { Board } from './Board'
//import { Player, RedPlayer, YellowPlayer} from './Player'

function Header() {
  return (
    <header className="header">
      <h1>Connect4</h1>
    </header>
  )
}

function Content() {
  return (
    <div className="game">
      <BoardComponent /> 
    </div>
  )    
}

function Footer() {
  return (
      <footer className="footer">
          <small>© 2022 Chris Guest</small>
      </footer>
  )   
}

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

      //board : new Board(this.width, this.height),
      //players : [Player, Player] = [new RedPlayer(), new YellowPlayer()]

    };
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default GameComponent;
