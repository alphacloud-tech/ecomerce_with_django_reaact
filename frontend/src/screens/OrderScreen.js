import React, { useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import Loader from "../components/Loader"
import { getOrderDetails } from '../actions/orderAction'


function OrderScreen() {

    const { id } = useParams()
    const orderId = id
    // console.log("t2", orderId);

    const dispatch = useDispatch()


    const orderDetails = useSelector(state => state.orderDetails) 
    // console.log("adams", orderDetails);
    const { order, error, loading } = orderDetails  
    // console.log("t3", order);

    if (!loading && !error) {
        order.itemsPrice =(order.orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0)).toFixed(2)
    }
   
    
    useEffect(() => {

        if (!order || order._id !== Number(orderId)) {

            dispatch(getOrderDetails(orderId))
        }
       
    }, [order, orderId]) // [order, orderId] we r triggering dependency
 


    
  return loading ?  (
      <Loader />
  ): error ? (
      <Message variant='danger'>{error}</Message>
  ): (
    <div>
       
       <h1>Order: {order._id} </h1>

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

                             {order.shippingAddress.address},  
                             {order.shippingAddress.city},
                             {" "}
                             {order.shippingAddress.postalCode},
                             {" "}
                             {order.shippingAddress.country}
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

                             {order.paymentMethod}  
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {order.orderItems.length === 0 ? <Message variant='info'>
                            Your order item is empty
                        </Message> : (
                            <ListGroup variant="flush">
                                {order.orderItems.map((item, index) => (
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
                                <Col>${order.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping:</Col>
                                <Col>${order.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Tax:</Col>
                                <Col>${order.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Total:</Col>
                                <Col>${order.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                                                
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </div>
  )
}

export default OrderScreen