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
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

 } from '../constants/UserConstants'


 
export const userLoginReducers = (state= {}, action) => { // its has multiple reducer
    switch (action.type) {

        case USER_LOGIN_REQUEST:

            return { loading:true} // return d object n update d state

        case USER_LOGIN_SUCCESS: // dis is wen our api call return sum data

            return { loading:false, userInfo:action.payload}
        
        case USER_LOGIN_FAIL: 

            return { loading:false, error:action.payload}

        case USER_LOGOUT: 
            return {} // just return empty state

        default:
            return state // initial state
     
    }
} 



export const userRegisterReducers = (state= {}, action) => { // its has multiple reducer
    
    switch (action.type) {

        case USER_REGISTER_REQUEST:

            return { loading:true} // return d object n update d state

        case USER_REGISTER_SUCCESS: // dis is wen our api call return sum data

            return { loading:false, userInfo:action.payload}
        
        case USER_REGISTER_FAIL: 

            return { loading:false, error:action.payload}

        case USER_LOGOUT: 
            return {} // just return empty state

        default:
            return state // initial state
     
    }
} 



export const userDetailsReducers = (state= {}, action) => { // its has multiple reducer
    
    switch (action.type) {

        case USER_DETAILS_REQUEST:
            // we nid to take orignal state by using spread operator
            return {...state, loading:true} // return d object n update d state

        case USER_DETAILS_SUCCESS: // dis is wen our api call return sum data

            return { loading:false, user:action.payload}
        
        case USER_DETAILS_FAIL: 

            return { loading:false, error:action.payload}

        case USER_DETAILS_RESET: 

            return { user: {}} // to reset user profile after logout


        default:
            return state // initial state
     
    }
} 


export const userUpdateProfileReducers = (state= {}, action) => { // its has multiple reducer
    
    switch (action.type) {

        case USER_UPDATE_PROFILE_REQUEST:
            // we nid to take orignal state by using spread operator
            return {loading:true} // return d object n update d state

        case USER_UPDATE_PROFILE_SUCCESS: // dis is wen our api call return sum data

            return { loading:false, success:true, userInfo:action.payload}
        
        case USER_UPDATE_PROFILE_FAIL: 

            return { loading:false, error:action.payload}

        case USER_UPDATE_PROFILE_RESET: 

            return {}


        default:
            return state // initial state
     
    }
} 