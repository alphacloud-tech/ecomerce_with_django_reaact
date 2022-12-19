
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from "../components/FormContainer"

import { saveShippingAddress } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"

function ShippingScreen() {
    /**
     * 1. gettin shippingAddress from state by using useSelector()
     * 2. distructuring shippingAddress from cart
     * 3. once we hv shippingAddress, we wnt to load in our initial value
     * from our shipping address.
     * so if we filled out our form and den we just happened to leave,
     * we come back later, we dnt wnt to hv to refill this out again,
     * we just wnt dat data loaded in right away.
     * 4. we will dispatch the action i.e saveShippingAddress 
     */

    const cart = useSelector(state => state.cart) // gettin shippingAddress from state
    const {shippingAddress} = cart // distructuring shippingAddress from cart

    const dispatch = useDispatch()

    /**
     * The reason we hv this  value={address ? address : ""}  in our forms
     * we just wnt dat data loaded in right away if dere is any else return empty string
     */
    const [address, setAddress]        = useState(shippingAddress.address) // we just wnt dat data loaded in right away.
    const [city, setCity]              = useState(shippingAddress.city) // we just wnt dat data loaded in right away.
    const [postalCode, setPostalCode]  = useState(shippingAddress.postalCode) // we just wnt dat data loaded in right away.
    const [country, setCountry]        = useState(shippingAddress.country) // we just wnt dat data loaded in right away.
    
    
    const navigate                     = useNavigate(); // history
    const { search }                   = useLocation(); // location

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("shipping");
        dispatch(saveShippingAddress({address,city,postalCode,country})) // dis will send payload to my action
        navigate('/payment')
    }
  return (
    <FormContainer>
    {/* 
        1. We're currently on step two and we want to pass in the steps as the prop.
            So you see how they're all disabled right now. So none of these are clickable.
            So as the props, I can just pass in step one and then step two.
    */}
        <CheckoutSteps step1 step2 />  {/* this is from checkouts component */}

        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>

            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Enter address"
                    value={address ? address : ""} // dis will be cumin from state i.e useState
                    onChange={(e) => setAddress(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Enter city"
                    value={city ? city : ""} // dis will be cumin from state i.e useState
                    onChange={(e) => setCity(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Enter postalc ode"
                    value={postalCode ? postalCode : ""} // dis will be cumin from state i.e useState
                    onChange={(e) => setPostalCode(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Enter country"
                    value={country ? country : ""} // dis will be cumin from state i.e useState
                    onChange={(e) => setCountry(e.target.value)} // to set d state
                >
                </Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">Continue</Button>

        </Form>
    </FormContainer>
  )
}

export default ShippingScreen