import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.comonent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import{createStructuredSelector}from 'reselect'
import{selectCarthidden} from '../../redux/cart/cart.selector';
import{selectCurrentUser}from '../../redux/user/user.selector';

import {auth} from '../../firebase/firebase.utils'

import './header.style.scss';


const Header =({currentUser, hidden})=>(
   
    <div className="header">

    <Link className='logo-container' to='/'>
        <Logo className='logo'/>

    </Link>
    <div className="options">
        <Link className='option' to='/shop'> Shop</Link>
        <Link className='option' to='/contact'> Contact</Link>
    {    
    
    currentUser?
            <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
        :
        <Link className='option' to='/signup' >Sign In</Link>
    }
        <CartIcon/>
    </div>
    {
        hidden?null:<CartDropdown/>
    }



    </div>
)

const mapStateToProps= createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCarthidden
});

export default connect(mapStateToProps)(Header);