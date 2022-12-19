import React, { useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { Row, Col, Button, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import CheckoutSteps from "../components/CheckoutSteps"

import {createOrder} from '../actions/orderAction'

import { ORDER_CREATE_RESET } from '../constants/OrderConstants' // use dis inside useEffect

function PlaceOrderScreen() {
   
    const navigate = useNavigate()

    const orderCreate = useSelector(state => state.orderCreate) // to see our order from state
    const {order, error, success} = orderCreate  // we r distructuring d orderCreate we get 4rm state

    const dispatch = useDispatch() // OK, so we have used dispatch and we want to trigger this order from our place order function right


    const cart = useSelector(state => state.cart)
    // console.log("adams", cart);

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice =(cart.itemsPrice > 100 ? 0 : 10). toFixed(2)
    cart.taxPrice = Number((0.05) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    /**
     * get this, we want to use use effect here and 
     * I want to use it just above our place order method.
     * So if we already have our order, we have our order ID.
     * We just want to send the user to the actual order.
     * So unsuccess.
     */

    if (!cart.paymentMethod) {
        /**
         * this one issue that's going to occur is if we go 
         * to our back end, we do need our payment method here.
         * Now, we faced this earlier where if I refresh placeorder page 
         * for some reason, that payment method doesn't
         * So if we happen to refresh this and then we submit this 
         * order, that's going to give us an error because
         */
         navigate('/payment')
    }

    useEffect(() => {
        //we want to first check if success is true
        // So remember, in orderReducer, we hv our success message.
        if (success) {
            navigate(`/order/${order._id}`) // we r going to create dis page 

            dispatch({
                type : ORDER_CREATE_RESET
            })
        }
    }, [success, navigate]) // [success, navigate] we r triggering dependency
 
    const placeOrder = () => {
        // console.log("placed order");
        dispatch(
            createOrder({
                orderItem       : cart.cartItems, // we r sending orderItem data by goin into cartItem\
                shippingAddress : cart.shippingAddress, // get shippingPrice from cartItem
                paymentMethod   : cart.paymentMethod, // get shippingPrice from cartItem
               
                // dis r dynamic value we get
                itemsPrice      : cart.itemsPrice,
                shippingPrice   : cart.shippingPrice, 
                taxPrice        : cart.taxPrice, 
                totalPrice      : cart.totalPrice 

            })
        )
    }
  return (
    <div>
        {/* So we want to allow all (step1 step2 step3 step4) to be clickable and 
        those will all be highlighted, too. */}

        <CheckoutSteps step1 step2 step3 step4 /> 

        <Row>
            <Col md={8}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Shipping : </strong>
                            {/* 
                                output the information from our car. 
                                So we have our car from our store 
                             */}

                             {cart.shippingAddress.address},  
                             {cart.shippingAddress.city},
                             {" "}
                             {cart.shippingAddress.postalCode},
                             {" "}
                             {cart.shippingAddress.country}
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p>
                            <strong>Method : </strong>
                            {/* 
                                output the information from our car. 
                                So we have our car from our store 
                             */}

                             {cart.paymentMethod}  
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {cart.cartItems.length === 0 ? <Message variant='info'>
                            Your cart item is empty
                        </Message> : (
                            <ListGroup variant="flush">
                                {cart.cartItems.map((item, index) => (
                                    <ListGroup.Item key = {index}>
                                        <Row>
                                            <Col md={2}> 
                                                <Image src={item.image} alt={item.name} fluid rounded/> 
                                            </Col>

                                            <Col> 
                                            {/* NOTE : product is our id we use for product   */}
                                                <Link to= {`/product/${item.product}`}>{item.name}</Link>
                                            </Col>

                                            <Col md={4}> 
                                                {item.qty} x {item.price} = 
                                                ${(item.qty * item.price).toFixed(2)}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </ListGroup.Item>

                </ListGroup>
            </Col>


            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Item:</Col>
                                <Col>${cart.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping:</Col>
                                <Col>${cart.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Tax:</Col>
                                <Col>${cart.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Total:</Col>
                                <Col>${cart.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        

                        <ListGroup.Item>
                            {
                                error && <Message variant='danger'>{error}</Message>
                            }
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cart.cartItems === 0}
                                onClick={placeOrder}
                            >
                                Place Order
                            </Button>
                        </ListGroup.Item>
                        
                        
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </div>
  )
}

export default PlaceOrderScreen