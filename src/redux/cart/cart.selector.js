import {createSelector} from 'reselect';

const selectCart = state=> state.cart;


export const selectCartItems = createSelector([selectCart] , cart=>cart.cartItem);

export const selectCarthidden= createSelector(
    [selectCart],
    cart=>cart.hidden
);

export const selectCartItemsCount= createSelector([selectCartItems], 
    cartItem=>cartItem.reduce((accumlator, cartItem)=> accumlator+cartItem.quantity, 0))


export const selectCartTotal= createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce((accumlator, cartItem )=> accumlator+ cartItem.quantity*cartItem.price, 0)
)

