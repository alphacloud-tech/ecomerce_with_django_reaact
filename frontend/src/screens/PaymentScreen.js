
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"

import { savePaymentMethod} from "../actions/cartActions"

function PaymentScreen() {
    /**
     * 1. under dispatch, We just want to create a condition to 
     *    see if the user has their shipping information added.
     *    So if the user hasn't filled out their shipping information, 
     *    then we just want to redirect them back to that shipping page.
     *    So we're just going to say if we don't have a shipping address 
     *    and this is going to be an object, so I'll just grab it by an 
     *    attribute and we'll just say, if not shipping address address.
     * 
     * 2. And we also want to set up a state here.
     * 3. And the next thing I want to do here is actually add in the 
     *    shipping or the semi handler.
     *    So when our form is submitted, because we are going to have a 
     *    form here to select the payment option,
     * 4. then I just want to dispatch the action.
     */

     const navigate                     = useNavigate(); // history
     const { search }                   = useLocation(); // location

    const cart = useSelector(state => state.cart) // gettin shippingAddress from state
    const {shippingAddress} = cart // distructuring shippingAddress from cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal') // And we also want to set up a state here.

    if (!shippingAddress.address) {
        navigate('/shipping') // OK, so we're redirecting the user if they don't have their information. And we also want to set up a state here.
    }

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(savePaymentMethod(paymentMethod))
        /**
         * I want to send the user to the place order page.
         * So after the user fills out the payment method, they can now finish 
         * processing that order.
         */
        navigate('/placeorder') // I want to send the user to the place order page.
    }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <Form onSubmit={submitHandler}>
          <Form.Group>
              <Form.Label>Selet Method</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="PayPal or Credit Card" // And this is where you can add in another feltlike stripe once you customize this, if you want to add
                  id="paypal"
                  name= 'paymentMethod'
                  checked // So by default, we already want this field checked.
                  /**
                    // So when we actually change this field, we want to go ahead 
                    and trigger an action here and update something.
                    And on change, we want to set that payment method in our state.
                   */
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                >

                </Form.Check>
              </Col>
          </Form.Group>
        
          <Button type='submit' variant="primary">
            Continue
          </Button>
        </Form>
    </FormContainer>
  )
} 

export default PaymentScreen