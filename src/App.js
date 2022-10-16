import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  //Currently we are using hooks in functional components insted of handling these attributes in react class components 
  const [user , setUser] = React.useState({ //Insted of React class component states
    firstName : 'Kushan',
    lastName : 'Ravindu'
  });

  //don't use promises within useEffects!!!!!!!!!!! 
  useEffect(() => { // don't use this. this is effect to the perfromance of the app (wildcard thing) 
    console.log('print always when component is reload or initiate same as ComponentDidMount and ComponentDidUpdate. ',user);
  });
  useEffect(() => { //Insted of React class component methods like ComponentDidMount,ComponentdDidUpdate,ComponentWillMount......
    console.log('print when component is reload or initiate same as ComponentDidMount. ',user);
  },[]);

  useEffect(() => { 
    console.log('print when only lastname is changed same as ComponentDidMount and ComponentDidUpdate. ',user);
  },[user.lastName]);

  useEffect(() => {
    console.log('print when lastName or  firstName changed same as ComponentDidMount and ComponentDidUpdate. ',user);

    return () => {
      console.log('component will unmount situation.................');//print when component is going to unmount
    }
  },[user.lastName,user.firstName]);


  const handleClick = () => {
    setUser({
      ...user,
      lastName : Math.random()
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <button onClick={handleClick}>Submit</button>
      </header>
    </div>
  );
}

export default App;
