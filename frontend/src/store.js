import { createStore, combineReducers, applyMiddleware } from 'redux'

// createStore : function dat create store
/**
 * createStore : function dat create store
 * combineReducers: ist use wen we hv multiple reducers 4 
 * ``               diff parts of our app. it will tk all those
 *                  reducers n combined dem to one reducer
 * 
 * applyMiddleware:  its for redux thunks
 */

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' // dis applied our store to d redux dev tool
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

import { userLoginReducers, 
    userRegisterReducers, 
    userDetailsReducers, 
    userUpdateProfileReducers,
} from './reducers/userReducers'

import { orderCreateReducer, orderDetailsReducer } from './reducers/orderReducers'



const reducer       = combineReducers({ // this is combined reducers
    productList          : productListReducers,
    productDetails       : productDetailsReducers,
    
    cart                 : cartReducer, 

    userLogin            : userLoginReducers,
    userRegister         : userRegisterReducers,
    userDetails          : userDetailsReducers,
    userUpdateProfile    : userUpdateProfileReducers,


    orderCreate          : orderCreateReducer,
    orderDetails         : orderDetailsReducer

})

/**
 * We nid to pull out our data from localStorage bcos right now its has
 * been stringfy, we nid to turn it back into js object and den we're going
 * to load it directly into our initialState
 */

const cartItemsFromStorage  = localStorage.getItem('cartItems') ? 
                            JSON.parse(localStorage.getItem('cartItems')) : [] // load localstorage data into ous state

        // null : if u cnt find user that values null                    
const userInfoFromStorage   = localStorage.getItem('userInfo') ? 
                            JSON.parse(localStorage.getItem('userInfo')) : null // load localstorage data into ous state


const shippingAddressFromStorage   = localStorage.getItem('shippingAddress') ? 
                            JSON.parse(localStorage.getItem('shippingAddress')) : {} // load localstorage data into ous state

const initialState  = {

    cart        :{
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin   :{userInfo : userInfoFromStorage} // passing it to our initial state

}
const middleware    = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store




