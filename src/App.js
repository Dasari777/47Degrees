import React from 'react';
import{Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_page.component';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin_signup_page.component';
import {auth, updateUserProfileDoc} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
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
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signup' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SigninSignup/>)}/>
          <Route path='/' component={Error}/>     
  
        </Switch>
      </div>
    )
  }
}

const mapStateToProps= ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps= dispatch=>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
