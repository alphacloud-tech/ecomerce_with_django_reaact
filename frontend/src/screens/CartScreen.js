import React, {useEffect} from 'react'
import { Link, useParams, useNavigate, useLocation  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { 
    Row, Col, ListGroup, Image, 
    Form, Button, Card 
} from 'react-bootstrap'
import Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'


function CartScreen() {
    const {id}      = useParams();
    const productId = id
    // console.log("ID :", productId);

    const navigate  = useNavigate();

    const { search } = useLocation();
    // const qty = search;
    // console.log("qty:" + qty);
    // const qty = search ? search.split('=') : 1;
    // console.log("qty:" + qty);
    // const qty = search ? search.split('=')[1] : 1;
    // console.log("qty:" + qty);
    // const qtyInUrl = new URLSearchParams(search).get("qty");
    // // console.log("QTY", qtyInUrl);
    // const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    const qty = search ? Number(search.split('=')[1]) : 1;
    // console.log("qty:" + qty);

    const dispatch      = useDispatch()
    const cart          = useSelector((state) => state.cart)
    const { cartItems }  = cart
    // console.log('cartItems', cartItems);

    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty))
      }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
      // console.log('remove', id);
      /**
       * 1. we r set dispatch dat we hv already import and configure this earlier
       * so we cn just do pass removeFromCart() inside dispatch and pass d id 
       * insde removeFromCart(id) function
       * 
       * So wen we click on remove icon i d frontend it we remove an item 
       * from our cart and update our store and actually update our loca storage too
       */
      dispatch(removeFromCart(id)) // removeFromCart is from cartAction

    }
    const checkOutHandler = () => {
      // console.log('checkout', id);
      // navigate('/login?redirect=shipping')
      navigate('/shipping')

    }

  return (
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {
              cartItems.length === 0 ? (
              <Message variant='info'>
                Your cart is empty
                <Link to='/'>Go Back</Link>
              </Message>
            ) : (
              <ListGroup variant='flush'>
                {
                  cartItems.map(item => (
                    <ListGroup.Item key={item.product}>
                        <Row>
                          <Col md={2}>
                            <Image 
                              src={item.image} 
                              alt={item.product} fluid rounded />
                          </Col>
                          <Col md={3}>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={2}>
                              ${item.price}
                          </Col>
                          <Col md={3}>
                            <Form.Control
                                as='select'
                                value={item.qty}
                                onChange={(e) =>  dispatch(addToCart(item.product, Number(e.target.value)))}
                              >
                              {/* 
                                  [...Array(product.countInStock).keys()] : to create array
                                  {x + 1}: for increament
                                */}
                              {
                                  [...Array(item.countInStock).keys()].map((x) => (
                                      <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                      </option>
                                  ))
                              }
                              </Form.Control>
                          </Col>
                          <Col md={1}>
                              <Button 
                                type='button' 
                                variant='light'
                                onClick={() => removeFromCartHandler(item.product)}
                                >
                                <i className='fa fa-trash'></i> 
                              </Button>
                          </Col>
                        </Row>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            )
            }
        </Col>
        <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  {/* reduce() : is d high order array method; acc : is d accumulator */}
                  <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                  {/* toFixed() : this allow us to set the max decimal places */}

                  ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button 
                    type='button'
                    className='btn-block'
                    disabled ={cartItems.length === 0}
                    onClick= {checkOutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
        </Col>
    </Row>
  )
}

export default CartScreen