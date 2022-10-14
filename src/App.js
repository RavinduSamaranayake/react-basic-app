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

  const SampleComp = (props) => {
    let color = ''
    switch(props.type){
      case 'SUBMIT':
        color = 'blue'
        break
      case 'CANCEL':
        color = 'red'
        break
      case 'CONFIRM':
        color = 'green'
        break
      default:
        color = 'white'
    }
    return (
      <button style = {{background: color}}>{props.text}</button>
     ) 
   }

   const SampleComp2 = () => {
    return (<div>
      <p>{element3}</p>
      <p>{element4}</p>
    </div>) 
   }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          {/* elements */}
          <p>{element1}</p>
          <p>{element2}</p>

        {/* components */}
        <SampleComp type='SUBMIT' text='Submit'/>
        <SampleComp type='CANCEL' text='Cancel'/>
        <SampleComp type='CONFIRM' text='Confirm'/>

        <SampleComp2/>   

  
      </header>
    </div>
  );
}

export default App;
