import logo from './logo.svg';
import './App.css';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function App() {

  const parentRef = useRef(null);

  const handleClick = () => {
    parentRef.current.clickMe();
  }


  let MyInput = (props,ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      clickMe : () => {
        console.log('Click Me');
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef}/>
  }

  MyInput = forwardRef(MyInput);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        <MyInput ref = {parentRef}/>
        <br/>
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
