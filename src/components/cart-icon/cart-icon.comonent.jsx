import React from 'react';
import{ ReactComponent as Cart} from '../../assets/shopping-bag.svg';
import{selectCartItemsCount} from '../../redux/cart/cart.selector';

import {connect} from 'react-redux';
import  {toggleCartHidden} from '../../redux/cart/cart.actions';
    


import'./cart-icon.style.scss';

const CartIcon=({toggleCartHidden ,itemcount})=>(

    <div className="cart-icon" onClick ={toggleCartHidden}>
        <Cart className='shopping-icon'/>
<span className='item-count'>{itemcount}</span>
    </div>
)

const mapStateToprops= state=>({
    itemcount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch=>({
    toggleCartHidden: () => dispatch(toggleCartHidden())  
})
export default connect(mapStateToprops, mapDispatchToProps)(CartIcon);