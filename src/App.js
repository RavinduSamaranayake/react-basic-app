import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const useApi = () => {
  const [response,setResponse] = useState({
    data : null,
    isLoading : false
  })

  const api = {
    post : (data) => {
      setResponse({data : null, isLoading : true})
      setTimeout(() => {
        setResponse({data : {message : 'OK',code : 200}, isLoading : false });
      },5000)
    },
    get : () => console.log('Get all data.................')
  }
  return [response,api];
}

function App() {

  const [response,api] = useApi();
  useEffect(() => {
    if(!response.isLoading && response.data != null)
        console.log(response.data,'....');
    else if(!response.isLoading && response.data == null)
        console.log('..waiting for response data..');    
    else
        console.log('............still loading............');
  },[response])      
  
  const handleSubmit = (event) => {
    event.preventDefault();
    api.post({name : 'kushan'})
  }

  const handleGet = () => {
    console.log('Get CALLED..',response);
    api.get()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="submit" value="Submit" /> 
          </form>
          <button onClick={handleGet}>Get Values</button>
        </div>
      </header>
    </div>
  );
}

export default App;
