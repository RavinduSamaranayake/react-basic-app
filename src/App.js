import logo from './logo.svg';
import './App.css';
import React from 'react';
import Clock from './components/Clock'

function App() {
  
  const handleInputChange = (event,name,age,obj) => {
    console.log(event.target.value,name,age,obj);
  }

  const items = [
    {id: 1,value: 11},
    {id: 2,value: 12},
    {id: 3,value: 13},
    {id: 4,value: 111},
    {id: 5,value: 210},
    {id: 6,value: 701},
    {id: 7,value: 191} ]
   
  const Item = (props) => {
    return <li>{props.value}</li>
  }  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1> 
        {/* <Clock/> */}
        <input type="text" onChange={(event) => handleInputChange(event,"Kushan",27,{})}></input>
        <ul>
          {items.map(num => <Item key={num.id} value={num.value}/>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
