import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_CREATE_RESET,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL

 } from '../constants/OrderConstants'

    /**
     * 1. So in here, I just want to set our state.
     * That's going to be an empty object and then 
     * we'll pass it in the action.
     */
 export const orderCreateReducer = (state={}, action) => { // state={} dis empty object

    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
           
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order:action.payload
            }

        case ORDER_CREATE_FAIL :
            return {
                loading: false,
                error:action.payload
            }
          
        case ORDER_CREATE_RESET :
            return {}
          
        default:
           return state
    }
 }

 export const orderDetailsReducer = (state={loading:true, orderItems:[], shippingAddress:{}}, action) => { // state={} dis empty object

    switch (action.type) {

        case ORDER_DETAILS_REQUEST:
            return {
                ...state, // We just want to pass in the original states. 
                loading: true
            }
           
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order:action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        
        default:
           return state
    }
 }
