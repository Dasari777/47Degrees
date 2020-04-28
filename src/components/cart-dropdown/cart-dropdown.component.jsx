import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import{createStructuredSelector}from 'reselect'
import {withRouter} from 'react-router-dom'

import{selectCartItems} from '../../redux/cart/cart.selector'

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.style.scss';


const CartDropdown =({cartItem, history , dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">

            {
            cartItem.length?        
            cartItem.map(cartItem=><CartItem  key={cartItem.id} item={cartItem}/>)
          : <span className='empty-mesage'> Your Cart is Empty</span>}

        </div>
        <CustomButton onClick={()=>{history.push('/checkout'); 
         dispatch(toggleCartHidden())}
     }> Go To Check Out</CustomButton>
    </div>

)


const mapStateToProps = createStructuredSelector({
    cartItem:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))