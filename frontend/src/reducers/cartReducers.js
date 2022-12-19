import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,

    CART_SAVE_SHIPPING_ADDRESS,

    CART_SAVE_PAYMENT_METHOD,

    CART_CLEAR_ITEMS

 } from '../constants/CartConstants'



 export const cartReducer = (state= {cartItems:[], shippingAddress: {}}, action) => { // its has multiple reducer
    
    switch (action.type) {

        case CART_ADD_ITEM: // check if action exist inside cartItem array
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.product === item.product)
            if (existItem) {
                return {
                    ...state, // return actual item
                    cartItems: state.cartItems.map(x => 
                        x.product === existItem.product ? item : x) // we wnt to find d one dat actually matches d new item n replace d matches item with a new item
                }
            }else {
                return {
                    ...state, // return original d state
                    cartItems:[...state.cartItems, item] // return original item n add new item into d array
                }

            }
        
            case CART_REMOVE_ITEM:
                return {
                    /**
                     * 1. use spread operator to return state
                     * 2. filter out the value in cartItems by using filter() method
                     * and we wnt to check if x.product which is productId is not
                     * equal to our action.payload.
                     * action.payload is going to be the Id of the product that we 
                     * want to remove.
                     * filter is just going to keep every product that doesnt match this Id,
                     * and if it does find an Id that it matches is going to remove that Id
                     * and we r going to get back a new array.
                     * Then go back to CartActions and create new actions
                     */
                    ...state,
                    cartItems:state.cartItems.filter((x) => x.product !== action.payload)
                }


            case CART_SAVE_SHIPPING_ADDRESS:
                return {
                    ...state, // returning back original state
                    shippingAddress: action.payload // modifying our shipping address by takin action.payload. dats goin to be dat form data dat we r sending
                    
                }

            case CART_SAVE_PAYMENT_METHOD:
                return {
                    ...state, // returning back original state
                    paymentMethod: action.payload // modifying our shipping address by takin action.payload. dats goin to be dat form data dat we r sending
                    
                }

            case CART_CLEAR_ITEMS:
                return {
                    ...state, // returning back original state
                    cartItems: []
                }
            
        default:
            return state // initial state
     
    }
} 