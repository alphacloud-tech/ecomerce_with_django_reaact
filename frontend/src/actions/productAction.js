
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    // for product details
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
 } from '../constants/productConstants'
// import { useParams  } from 'react-router-dom'
import axios from 'axios'

 export const listProducts = () => async (dispatch) => { //dis is incharge of replacing the api call dat we made in our homeScreen
    /**
     * dispatch : its use to dispatch action import above
     * i.e PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS n PRODUCT_LIST_FAIL
     */
    try {
        dispatch({type: PRODUCT_LIST_REQUEST}) // dis will fire off d d first reducer
        
        const { data } = await axios.get('/api/products/') // instead of using .then promise
        
        dispatch({
            type: PRODUCT_LIST_SUCCESS, 
            payload: data
        })
         
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
  
 }


 export const listProductDetail = (id) => async (dispatch) => { //dis is incharge of replacing the api call dat we made in our homeScreen
    /**
     * dispatch : its use to dispatch action import above
     * i.e PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS n PRODUCT_LIST_FAIL
     */
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST}) // dis will fire off d d first reducer
        
        const { data } = await axios.get(`/api/products/${id}`) // instead of using .then promise
        
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS, 
            payload: data
        })
         
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
  
 }