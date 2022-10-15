import logo from './logo.svg';
import './App.css';
import React from 'react';
import Clock from './components/Clock'

function App() {
  
  const handleInputChange = (event,name,age,obj) => {
    console.log(event.target.value,name,age,obj);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1> 
        {/* <Clock/> */}
        <input type="text" onChange={(event) => handleInputChange(event,"Kushan",27,{})}></input>
      </header>
    </div>
  );
}

export default App;
