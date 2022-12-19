import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"

import { login } from "../actions/userAction"


function LoginScreen() {
    const [email, setEmail]         = useState('') // set state
    const [password, setPassword]   = useState('') // set state

    const dispatch = useDispatch() // we r  dispatch our action

    const navigate  = useNavigate(); // history
    const { search } = useLocation(); // location
    const redirect = search ? Number(search.split('=')[1]) : '/';

    // we r getting our user state by useing useSelector. remember
    // userLogin is inside of store.js. once we get dat value we wnt
    // to distructure dat inside of userlogin

    const userLogin = useSelector(state => state.userLogin)

    // we r getin back an object, so userlogin inside of our userReducer.js
    // we wnt to pull out loading, error , userInfo
    const {error, loading, userInfo} =  userLogin // distructure dat inside of userlogin

    /**
     * Now dat we hv our user information 
     * 1. we wnt to make sure that a login user cnt login again i.e if u hv login
     * there's no reason why an authenticated user should be able to see this 
     * page again i.e login page
     * 
     */

    useEffect(() => {
        /**
         * if user exist we wnt to send dem back to watever inside redirect 
         */
        if(userInfo){
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect]) //[navigate, userInfo, redirect]: dis r dependencies

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('form wrkin');
        dispatch(login(email, password))
    } 

  return (
    <FormContainer>
        <h1>Sign In</h1>
        {
            error && <Message variant='danger'>{error}</Message>
        }
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
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
            <br/>
            <Button type="submit" variant="primary"> Sign In</Button>

            <Row className="py-3">
                {/* we set d value we wnt to  send d user
                    we r sending user to the register page. But with
                    dat we want to add in an extra parameter for the 
                    redirect option i.e redirect ? `/register?redirect=${redirect}`
                    
                    NOTE: we hv to config redirect 

                    we wnt to check for redirect

                */}
                <Col>
                    New Customer? 
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>

        </Form>
    </FormContainer>

  )
}

export default LoginScreen