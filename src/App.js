import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

function App() {

  const[number,setNumber] = useState(0)
  const[randomNumber,setRandomNumber] = useState(Math.random(100))

  const updateRandomNumber = () => {
    setRandomNumber(Math.random(100))
  }
  
  const updateNumber = () => {
    setNumber(number +1)
  }

  // const getNumberText = (addValue) => {
  //   return `last updated number is : ${number+addValue}`
  // }

  const getNumberText = useCallback((addValue) => {
    return `last updated number is : ${number+addValue}`
  }, [number]); // Now useEffect called only number is changed

  useEffect(() => {
    console.log('useEffect Calling.....');

  }, [getNumberText]); //here this use effect calling even random number is changing. reason is whole componenet re rendering when change random number. after re rendering previous
                       //getNumberText function not equals to latest function value (but body not changed. (reffer js obj==obj thing))  this will effect to the performance issue of react.
                       //for avoiding this situation let's use  useCallback hook. useCallback hook keep the number state in memory and calling function when only number is changed
                       //okay then let's modify our getNumber text function here.                   

  return (
    <div className="App">
      <header className="App-header">
        {getNumberText(100)}
        <br/>
        number : {number}
        <br/>
        random number : {randomNumber}
        <br/>
        <button onClick={updateRandomNumber}>Update Random Number</button>
        <button onClick={updateNumber}>Update Number</button>
      </header>
    </div>
  );
}

export default App;
