import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import{selectCartItems} from '../../redux/cart/cart.selector'

import {connect} from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

const CartDropdown =({cartItem})=>(
    <div className="cart-dropdown">
        <div className="cart-items">

        {
            cartItem.map(cartItem=><CartItem  key={cartItem.id} item={cartItem}/>)
        }

        </div>
        <CustomButton> Go To Check Out</CustomButton>
    </div>

)


const mapStateToProps = state=>({
    cartItem:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);