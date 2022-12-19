import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET, // to reset user profile after logout


    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

 } from '../constants/UserConstants' 

 export const login = (email,password) => async (dispatch) => {
   
        /**
             * here we will use try catche and den do d 
             * basic configurations. will dispatch login
             * requests 
             * After hving request using dispatch the next tin
             * we will use axious to make our api calls i.e we
             * wnt to make request to the backend and den give
             * back that token
             * 
             * 1. import axious
             * 2. use d axious to make d api call
             * 3. send request to d url
             * 4. send data to d url as well becos django still expecting
             * the username and password. they r data we hv to send wit post request
             * 
             * 5. pass in sum data with post request by creating sum configuration
             * b4 fetching with axious. i.e const config = {
                    Headers:{
                        'Content-type': 'application/json'

                    }
                }

            6. if dis request is successful, we will dispatch and then send
            the payload to our reducers

            7. once we get this data, we wnt to actually set it in our state,
            but we also wnt to set it in our local storage

            8. to access this data dat we store in our locastorage we hv to go to our
            store.js.
            in our store.js we wnt be able to pull dis data from localstorage 
            wen we first login and den actually load our state wit it.
            technically our information is coming from our state, so we nid to
            tak dat and load it into our state
    */
    try {
        
        dispatch({ // making request
            type: USER_LOGIN_REQUEST
        })

        const config = { // there are different way to do dis
            headers:{
                'Content-type': 'application/json'

            }
        }
        // mk post request to get back user token. Dis we send our username
        // and password and get back d token
        const {data} = await axios.post( // send request
            '/api/users/login/',
            { 'username':email, 'password':password },
            config
            ) 

        dispatch({
            type: USER_LOGIN_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

        // userInfo is from our state 1.e userReducers file in USER_LOGIN_SUCCESS case
        localStorage.setItem('userInfo', JSON.stringify(data)) // we r takin user details to localstorage to no dat its has login

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
 }

 export const logout = () => (dispatch) => {
     localStorage.removeItem('userInfo')
     dispatch({ type:USER_LOGOUT })
     dispatch({ type:USER_DETAILS_RESET }) // to reset user profile after logout
 }

 export const register = (name, email,password) => async (dispatch) => {
   
    try {
    
        dispatch({ // making request
            type: USER_REGISTER_REQUEST
        })

        const config = { // there are different way to do dis
            headers:{
                'Content-type': 'application/json'

            }
        }
       
        const {data} = await axios.post( // send request
            '/api/users/register/',
            { 'name':name, 'email':email, 'password':password },
            config
            ) 

        dispatch({
            type: USER_REGISTER_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

        dispatch({
            type: USER_LOGIN_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

        // userInfo is from our state 1.e userReducers file in USER_LOGIN_SUCCESS case
        localStorage.setItem('userInfo', JSON.stringify(data)) // we r takin user details to localstorage to no dat its has login

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
}


export const getUserDetails = (id) => async (dispatch, getState) => {
   
    try {
    
        dispatch({ // making request
            type: USER_DETAILS_REQUEST
        })

        // we wnt to pull out d current user dat logged in and dis 
        // is goin to object and we r going to get the value out of getState().
        // Remember getState() is a lot lk useSelector()

        const {
            userLogin: { userInfo } // to get d user dat login
        } = getState()

        const config = { // there are different way to do dis
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}` // adding token into headers

            }
        }
       
        const {data} = await axios.get( // send request
            /**
             * wen we fire off this action in our profile screen, 
             * the id and the value of id will just say profile. so dat
             * is going to be a string value.
             * 
             * so we are going to your api users and den profile later on
             * wen we do wnt to access a user from our admin panel, we r 
             * actually going to pass in d user id and we will hv a route 
             * tha is just going to be users and den the id.
             * 
             * so this ${id} value has to be dynamic, at one point will send in
             * user id and the next point will send in profiles.
             * 
             *  But here we just call it id
             */
           `/api/users/${id}/`,
            config
            ) 

        dispatch({
            type: USER_DETAILS_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {

    /** 
     * wat dis action is goin to do, its goin to take an object as parameter i.e
     * user object. user object will store the name, the email and the password.
     * the n send dat data to our url
     * 
    */
   
    try {
    
        dispatch({ // making request
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo } // to get d user dat login
        } = getState()

        const config = { // there are different way to do dis
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}` // adding token into headers

            }
        }
       
        const {data} = await axios.put( // send request
           
           `/api/users/profile/update/`,
            user, // pass user object
            config
            ) 

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

        /**
         * once we send d request to our db, n get dat new user profile
         * 
         * we also wnt to dispatch login, i.e log the user in with new information
         * 
         * 
         */

        dispatch({
            type: USER_LOGIN_SUCCESS, // means we got d data
            payload: data // d data we get back from dis request
        })

        localStorage.setItem('userInfo', JSON.stringify(data)) // update our localstorage

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL, 
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message // default error message
        })
    }
}
