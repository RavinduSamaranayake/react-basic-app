import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ThemeContext,themes } from './providers/theme';
import Header from './components/Header';
import AppWrapper from './components/AppWrapper';

function App() {
  const [selectedTheme,setTheme] = useState(themes.light);

  const handleClick = () =>{
    setTheme(selectedTheme === themes.light ? themes.dark : themes.light);
  }
  return ( 
    <ThemeContext.Provider value={selectedTheme}>
      <div className="App">
        <AppWrapper>
          <img src={logo} className="App-logo" alt="logo" />
          <Header/>
          <button onClick={handleClick}>Click</button>
       </AppWrapper>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
