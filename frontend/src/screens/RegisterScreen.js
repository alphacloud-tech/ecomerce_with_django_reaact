
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"

import { register } from "../actions/userAction"

function RegisterScreen() {

    const [name, setName]                           = useState('') // set state
    const [email, setEmail]                         = useState('') // set state
    const [password, setPassword]                   = useState('') // set state
    const [confirmPassword, setConfirmPassword]     = useState('') // set state
    const [message, setMessage]                     = useState('') // set state

    const dispatch      = useDispatch(); // we r  dispatch our action

    const navigate      = useNavigate(); // history
    const { search }    = useLocation(); // location
    const redirect      = search ? Number(search.split("=")[1]) : "/";


    const userRegister = useSelector(state => state.userRegister)

    const {error, loading, userInfo} =  userRegister // distructure dat inside of userlogin


    useEffect(() => {
       
        if (userInfo){
            navigate('/')
            // navigate(redirect)
        }
    }, [navigate, userInfo, redirect]) //[navigate, userInfo, redirect]: dis r dependencies

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Passwords do not match")
        }else{
            // console.log('form wrkin');
            dispatch(register(name, email, password))
        }
        
    } 
    
  return (
    <FormContainer>

        <h1>Sign Up</h1>

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
                    required
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
                    required
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword} // dis will be cumin from state
                    onChange={(e) => setConfirmPassword(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>

            <br/>
            <Button type="submit" variant="primary">Register</Button>


            <Row className="py-3">
               
                <Col>
                    Have an Account? 
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/login'}>
                        Sign In
                    </Link>
                </Col>
            </Row>

        </Form>
        
    </FormContainer>
  )
}

export default RegisterScreen