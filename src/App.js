import React from 'react';
import{Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_page.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component'
import SigninSignup from './pages/signin-signup/signin_signup_page.component';
import Header from './components/header/header.component';
import {auth, updateUserProfileDoc} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import{createStructuredSelector}from 'reselect'
import {setCurrentUser} from './redux/user/user.actions'
import{selectCurrentUser} from '../src/redux/user/user.selector'
import './App.css';


const Error=(props)=>{
  console.log(props)
  return(
  <div>
    <h1>This is 404 error page</h1>
  </div>
);
}

class App extends React.Component{
  

  unSubscribeFromAuth= null;

  componentDidMount(){
    const {setCurrentUser}= this.props
    this.unSubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef= await updateUserProfileDoc(userAuth)
         userRef.onSnapshot(snapShot=>{
           setCurrentUser({
               id:snapShot.id,
               ...snapShot.data()
             })
           
         });        

      }else{

       setCurrentUser(userAuth);
        
      }
       
      
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){

    return (
      <div>
        <Header/>
        
        <Switch>
          <Route exact  path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signup' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SigninSignup/>)}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route path='/' component={Error}/>     
  
        </Switch>
      </div>
    )
  }
}

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps= dispatch=>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
