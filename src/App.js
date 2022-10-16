import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';

function reducer(state, action){
  switch (action.type) {
    case 'add':
      return {count: state.count +1};
    case 'sub':
      return {count: state.count -1 };  
    default:
      return state;
  }
}

function App() {
  const initialState = {
    count : 0
  }
  const [state, dispath] = useReducer(reducer,initialState); //same as useState hook
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        Count : {state.count}
        <button onClick={() => dispath({type : 'add'})}>Add</button>
        <button onClick={() => dispath({type : 'sub'})}>Sub</button>  
      </header>
    </div>
  );
}

export default App;
