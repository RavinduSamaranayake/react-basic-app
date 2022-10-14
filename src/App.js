import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const element1 = <h3>Hello Kushan</h3> //element create using JSX (JavaScript XML)-> EASSY WAY
  const element2 = React.createElement('h3',null,'Hello Ravindu') // above JSX converts to this type

  const element3 = <div>
    <div>Are you sure want to do this ?</div>
  </div>
  
  const element4 = React.createElement('div',null,React
  .createElement('div',null,'Are you sure want to do this2s ?'))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <p>{element1}</p>
        <p>{element2}</p>
        <p>{element3}</p>
        <p>{element4}</p> 
      </header>
    </div>
  );
}

export default App;
