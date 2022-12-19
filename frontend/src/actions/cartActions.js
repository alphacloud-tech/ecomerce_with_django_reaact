import axios from 'axios'

import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,

    CART_SAVE_SHIPPING_ADDRESS,

    CART_SAVE_PAYMENT_METHOD,
 } from '../constants/CartConstants'
// import { useParams  } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// NOTE: getState is lk useSelector




export const addToCart = (id,qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload: {
            product         : data._id,
            name            : data.name,
            image           : data.image,
            price           : data.price,
            countInStock    : data.countInStock,
            qty
        }
    })
    /**
     * next we nid to load dat data to localstorage so when sombody goes 
     * shopping on our website, they cn add some items to a cart, dey cn leave
     * our website and den cum back and still see those items in their cart without
     * ever having to actually create an account.
     * 
     * TO FIND localstorage: ctrlshift i -> application -> open locaStorage -> 
     * http://localhost:3000
     * even if we refresh our page every data we enter remain dere
     * 
     * so, we r going to load our cart data in localstorage and then 
     * actually call this data on and set it into our state every 
     * time we load the website
     * 
     * cart : this is from store.js
     * 
     * getState().cart.cartItems : this need to be string value b4 we cn 
     * set it to localStorage. we r turn it into string bcos local storge 
     * cn only hv key value pairs. and then once we actually wnt to get 
     * this data, we're just going to parse it and turn it back into object
     * 
     * JSON.stringify: to turn getState().cart.cartItems to string
     * 
     * Note: we r going to get dis data inside store.js
     */
    localStorage.setItem('cartItems', 
        JSON.stringify(getState().cart.cartItems)) // set our data into loclstorage
}

export const removeFromCart = (id) => (dispatch, getState) => {
    /**
     * 1. we nid to get state here n we r going to access to dat entire state
     * 2. all we nid to do is just set dispatch and we r going to set d type by
     * create object type will be remove items sold, to cart remove item
     * 3. type: CART_REMOVE_ITEM
     * 4. payload : just pass in d Id we use as parameter 
     * 5. last tin is to actually update our local storage n go to cartScreen
     * and use d action by dispatching it inside our removeFromCart() function
     * we defined
     * 
     */
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', 
        JSON.stringify(getState().cart.cartItems)) // update our local storage
}


export const saveShippingAddress = (data) => (dispatch) => {
    /**
     * 
     */
    dispatch({ // dis is where we r sending data
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem('shippingAddress', 
        JSON.stringify(data)) //we r only saving shipping address in localStorage
}


export const savePaymentMethod = (data) => (dispatch) => {
    /**
     * 
     */
    dispatch({ // dis is where we r sending data
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })
    localStorage.setItem('paymentMethod', 
        JSON.stringify(data)) //we r only saving shipping address in localStorage
}