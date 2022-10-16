import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  
  const [data,setData] = React.useState();

  const handleSubmit = (event) => {
    console.log(event,'submitted called.....');
    event.preventDefault();//to prevent the deafult behaviors of html forms. one of is refresh page when it is submit. 
  }

  const handleChange = (event) => {
    console.log(event);
    setData({
      ...data,
      [event.target.name] : getValueOnInputType(event.target.type,event)
    });
    console.log('to be submit data is ',data); //we use '...' with 'data' for storing previous data object. if not use like this then data gets only latest input value only 
  }

  const getValueOnInputType = (inputType,event) => {
    console.log('input type is....',inputType);
    switch (inputType) {
      case 'checkbox':
        return event.target.checked;
      default:
        return event.target.value;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' name='firstName' onChange={handleChange}></input>
          </div>
          <div>
            <input type='text' name= 'lastName' onChange={handleChange}></input>
          </div>
          <div>
            <input type= 'checkbox' name='isOk' onChange={handleChange}></input>
          </div>  
          <div>  
            <button type='submit'>Submit</button> 
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
