import React from 'react';
import ReactDOM from 'react-dom';
import GameComponent from './GameComponent';
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <GameComponent title={"Connect4"} />
  </React.StrictMode>,
  document.getElementById('root')
);
