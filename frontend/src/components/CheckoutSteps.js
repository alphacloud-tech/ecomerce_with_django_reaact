
import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer  } from 'react-router-bootstrap'

function CheckoutSteps({step1, step2, step3, step4}) {

    /**
     * 1. And the first thing I want to do with my component 
     *    here is actually the structure of the prop.
     *    So as the props I'm going to pass in each step. we hv 4 steps
     * 
     * 2. So we're just going to d structure those and we'll 
     *    have to pass those into our actual component here.
     * 
     * 3. And we want to write a condition inside of this NAV item.
     *    So if, for example, we're on step two in the props for step 
     *    two, when we're using this in that page, we're going to pass 
     *    in step one as complete and then step two. But step three and 
     *    four will now be passed in. So our condition is simply going 
     *    to check if that prop is passed in.
     *    
     *    So we'll always show the steps, but we're going to disable 
     *    the step if it's not there.
     * 
     * 4. Now, we just want to use that inside of our shipping screen.
     */

  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {step1 ? (
                <LinkContainer  to='/login' >
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Login</Nav.Link> // But we don't want the user to be able to click it.
            )}
        </Nav.Item>

        <Nav.Item>
            {step2 ? (
                <LinkContainer to='/shipping' >
                    <Nav.Link>Shipping</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Shipping</Nav.Link> // But we don't want the user to be able to click it.
            )}
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
                <LinkContainer to='/payment' >
                    <Nav.Link>Payment</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Payment</Nav.Link> // But we don't want the user to be able to click it.
            )}
        </Nav.Item>

        <Nav.Item>
            {step4 ? (
                <LinkContainer to='/placeorder' >
                    <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Place Order</Nav.Link> // But we don't want the user to be able to click it.
            )}
        </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps