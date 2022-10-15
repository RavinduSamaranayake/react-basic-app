import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserProfile,{UserRole} from './components/UserProfile';

function App() {

  const [title,setTitle] = React.useState('Hello.....');//we can add number 5 also here. so we have to give a type here. for that let's use react props types
  
  const onSubmitCalled = (name,age) => {
    console.log('Submit Event Called in Parent Component : ',name,age);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Site</h1> 
        <UserProfile
         title = {title}
         name = 'Kushan'
         address= {{
          zip : '1234',
          city : 'Elp'
         }}
         onSubmitCalledInParent = {onSubmitCalled}
         /> 
        {UserRole.ADMIN}
      </header>
    </div>
  );
}

export default App;
