import cartActionTypes from './cart.actionsTypes'


export const toggleCartHidden= ()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem=item=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCart= item=>({
    type:cartActionTypes.CLEAR_ITEM_FOM_CART,
    payload: item
})

export const removeItem= item=>(
    {
        type:cartActionTypes.REMOVE_ITEM,
        payload: item
    }
)