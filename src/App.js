import React from 'react';
import{Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_page.component';
import Header from './components/header/header.component';
import Signin_Signup from './pages/signin-signup/signin_signup_page.component';

import './App.css';


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
      <Header />
      
      <Switch>
        <Route exact  path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signup' component ={Signin_Signup}/>
        <Route path='/' component={Error}/>     

      </Switch>
    </div>
  );
}

export default App;
