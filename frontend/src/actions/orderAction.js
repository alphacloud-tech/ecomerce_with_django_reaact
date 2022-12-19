import axios from 'axios' // to make api call

import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL

 } from '../constants/OrderConstants'

import { CART_CLEAR_ITEMS } from '../constants/CartConstants'


 export const createOrder = (order) => async (dispatch, getState) => {

    /** 
     * wat dis action is goin to do, its goin to take an object as parameter i.e
     * user object. user object will store the name, the email and the password.
     * the n send dat data to our url
     * 
    */
   
    try {
    
        dispatch({ // making request
            type: ORDER_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo } // So we need our user to send in our token or we need to be logged in to actually place an order.
        } = getState()

        const config = { // there are different way to do dis
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}` // adding token into headers

            }
        }
       
        const {data} = await axios.post( 
           
           `/api/orders/add/`,
            order, // And we need to pass in order as the actual method here.
            config
            ) 

        dispatch({
            type: ORDER_CREATE_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

        dispatch({ // this will clear our state
            type: CART_CLEAR_ITEMS,
            payload: data
        })

        localStorage.removeItem('cartItems') // dis we remove it rom localStorage

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
}


export const getOrderDetails = (id) => async (dispatch, getState) => {

    try {
    
        dispatch({ // making request
            type: ORDER_DETAILS_REQUEST
        })

        const {// we nid to login to get our token
            userLogin: { userInfo } // So we need our user to send in our token or we need to be logged in to actually place an order.
        } = getState()

        const config = { // there are different way to do dis
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}` // adding token into headers

            }
        }
       
        const { data } = await axios.get( `/api/orders/${id}/`, config ) 

        dispatch({
            type: ORDER_DETAILS_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

      
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
}

