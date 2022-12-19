import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
import { USER_UPDATE_PROFILE_RESET } from "../constants/UserConstants"

import { getUserDetails, updateUserProfile } from "../actions/userAction"

function ProfileScreen() {

    const [name, setName]                           = useState('') // set state
    const [email, setEmail]                         = useState('') // set state
    const [password, setPassword]                   = useState('') // set state
    const [confirmPassword, setConfirmPassword]     = useState('') // set state
    const [message, setMessage]                     = useState('') // set state

    const dispatch      = useDispatch(); // we r  dispatch our action

    const navigate      = useNavigate(); // history


    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } =  userDetails // distructure dat inside of userlogin

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } =  userLogin // distructure dat inside of userlogin

    // to make sure dat useeffect aware of dat action being updated
    // userUpdateProfile: we use dis to get dat success responds 4 our reducer
    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    // success is 4 reducer USER_UPDATE_PROFILE_SUCCESS once its true 
    // we wnt to fire of USER_UPDATE_PROFILE_RESET n  clear off our state
    // add success to dispatch dependences and also add it to d if statement
    const { success } =  userUpdateProfile


    useEffect(() => {
       
        if (!userInfo){
            navigate('/login')
            // navigate(redirect)
        }else{
          // here we wnt to perform 2 action so its goin to be another dependency

          if (!user || !user.name || success) {
              dispatch({ // we wnt to reset if success is true
                  type: USER_UPDATE_PROFILE_RESET 
              })
            // if we do not hv any user info, lets go ahead n dispatch our action to get 
            // dat user infomation n pass profile as parameter as a string
            dispatch(getUserDetails('profile')) // geting user infomation
            
          }else{
            setName(user.name)
            setEmail(user.email)
          }
        }
    }, [dispatch, navigate, userInfo, user, success]) //[navigate, userInfo, redirect]: dis r dependencies

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Passwords do not match")
        }else{
            // console.log('updating form wrkin');
            dispatch(updateUserProfile({
                /**
                 * dis is where we will send in d user object to d backend
                 * get username, email and password
                 */
                'id':user._id, 
                'name': name, 
                'email': email, 
                'password': password
            }))
        }
        
    } 
  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>

          { message && <Message variant='danger'>{message}</Message> }  {/* this for if d password do not match */}
          { error && <Message variant='danger'>{error}</Message> }
          {loading && <Loader />}

        <Form onSubmit={submitHandler}>

            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    required
                    type="name"
                    placeholder="Enter Name"
                    value={name} // dis will be cumin from state i.e useState
                    onChange={(e) => setName(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    required
                    type="email"
                    placeholder="Enter Email"
                    value={email} // dis will be cumin from state i.e useState
                    onChange={(e) => setEmail(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Enter Password"
                    value={password} // dis will be cumin from state
                    onChange={(e) => setPassword(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="passwordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword} // dis will be cumin from state
                    onChange={(e) => setConfirmPassword(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>

            <br/>
            <Button type="submit" variant="primary">Update</Button>

        </Form>
        </Col>

        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
  )
}

export default ProfileScreen