// reducer is a function dat takes in our current state
// and its going to take action of wat we wnt to do wit state
// like load data. it update our store

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

// for product details
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
 } from '../constants/productConstants'


export const productListReducers = (state= {products:[]}, action) => { // its has multiple reducer
    switch (action.type) {

        case PRODUCT_LIST_REQUEST:

            return { loading:true, products:[] } // return d object n update d state

        case PRODUCT_LIST_SUCCESS: // dis is wen our api call return sum data

            return { loading:false, products:action.payload}
        
        case PRODUCT_LIST_FAIL: // dis is wen our api call return sum data

            return { loading:false, error:action.payload}

        default:
            return state // initial state
     
    }
} 


export const productDetailsReducers = (state= {product:{reviews:[]}}, action) => { 
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:

            return { loading:true, ...state } // return d object n update d state

        case PRODUCT_DETAILS_SUCCESS: // dis is wen our api call return sum data

            return { loading:false, product:action.payload}
        
        case PRODUCT_DETAILS_FAIL: // dis is wen our api call return sum data

            return { loading:false, error:action.payload}

        default:
            return state // initial state
     
    }
} 