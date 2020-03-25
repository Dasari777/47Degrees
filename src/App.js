import React from 'react';
import{Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage=(props)=>{
  console.log(props) 
return(
  <div>
    
    <h1>This is Hats page</h1>
  </div>
);
}

const Error=(props)=>{
  console.log(props)
  return(
  <div>
    <h1>This is 404 error page</h1>
  </div>
);
}

function App() {
  return (
    <div>
      
      <Switch>
        <Route exact  path='/' component={HomePage}/>
        <Route exact path='/hatspage' component={HatsPage}/>
        <Route path='/' component={Error}/>      

      </Switch>
    </div>
  );
}

export default App;
