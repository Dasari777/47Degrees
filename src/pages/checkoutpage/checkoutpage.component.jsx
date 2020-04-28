import React from 'react';
import './checkoutpage.styles.scss'

import {connect} from 'react-redux';
import{createStructuredSelector} from 'reselect'

import { selectCartItems , selectCartTotal} from '../../redux/cart/cart.selector'


import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({cartItem, total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>
                    Product
                </span>
            </div>
            <div className="header-block">
                <span>
                    Description
                </span>
            </div>
            <div className="header-block">
                <span>
                    Quantity
                </span>
            </div>
            <div className="header-block">
                <span>
                    price
                </span>
            </div>
            <div className="header-block">
                <span>
                    Remove
                </span>
            </div>
        </div>

        {
            cartItem.map((item, i)=><CheckoutItem key={i} item={item}/>)
        }
       
    <div className="total">Toatl:${total}</div>
    </div>)


const mapStateToProps= createStructuredSelector({
    cartItem: selectCartItems,
    total:selectCartTotal

})




export default connect(mapStateToProps)(CheckoutPage)
