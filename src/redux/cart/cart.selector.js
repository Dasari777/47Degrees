import {createSelector} from 'reselect';

export const selectCart = state=> state.cart;


export const selectCartItems = createSelector([selectCart] , cart=>cart.cartItem);

export const selectCartItemsCount= createSelector([selectCartItems], 
    cartItem=>cartItem.reduce((accumlator, cartItem)=> accumlator+cartItem.quantity, 0))