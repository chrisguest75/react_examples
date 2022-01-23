import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  React.createElement("h1", { style: {color: "blue"}}, "Hello", React.createElement("h2", "Hello!")),
  document.getElementById('root')
);*/

let city = {
  name: "London",
  country: "UK"
}
/*ReactDOM.render(
  <h1 className="codeclass">{city.name} is in {city.country}</h1>,
  document.getElementById('root')
);*/
ReactDOM.render(
  <h1 id="codeid">{city.name} is in {city.country}</h1>,
  document.getElementById('root')
);
