import cartActionTypes from './cart.actionsTypes'
import {addItemToCart} from './cart.utils';
// import { connect } from 'react-redux';

const INITIAL_STATE={
    hidden:true,
    cartItem:[]
}

const cartReducer =(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItem:addItemToCart(state.cartItem, action.payload)
            }
    
        default:
           return state
           
    }
}

export default  cartReducer