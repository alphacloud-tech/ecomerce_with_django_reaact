
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch}  from 'react-redux'
 
import { Link, useParams, useNavigate  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetail } from '../actions/productAction'
// import axios from 'axios' 
// import products  from '../products'

function ProductScreen() {
    
    /**
        * // Use the useParams hook to access the id match param. 
        // The match param will be a string, so if your product 
        // ids are a number type, then to ensure strict equality 
        // convert the id param to a number: Note d id is from 
        // <Route path="/product/:id" element={ <ProductScreen/> } />
        const {id} = useParams();
        // const product = products.find((p) => p._id === match.params.id)
        // const product = products.find((p) => p._id === id)

        const [product, setProduct] = useState([]);

        // useEffect get reloaded every single time or triggerd 
        // everytime the component loads or when a state value get
        // updated
        useEffect(() => {
            // console.log("useeffect tiggered");

            async function fetchProduct() { // in order to use await we nid to wrap d call inside async function
            const { data } = await axios.get(`/api/products/${id}`) // instead of using .then promise
            setProduct(data)
            // console.log(data._id);
            }

            fetchProduct() // call d function
        
        }, [])
    */
    
    
    const [qty, setQty] = useState(1)

    const { id } = useParams();
    const navigate  = useNavigate();
    
    const dispatch = useDispatch()
    const productDetails = useSelector((state)=> state.productDetails)
    const { loading, error, product } = productDetails
     
    useEffect( () => {
        dispatch(listProductDetail(id))
       
    }, [dispatch,id])

    const addToChartHandler = () => {
        // console.log('add to cart');
        navigate(`/cart/${id}?qty=${qty}`)
    }
    // const product = {}
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        {loading ? 
            <Loader />
            : error 
            ? <Message variant='danger'>{error}</Message>
            :(
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">

                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating
                                    value= {product.rating} 
                                    text = {`${product.numReviews} reviews`}
                                    color = {'#f8e825 '}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${product.price }
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description }
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e) =>  setQty(e.target.value)}
                                            >
                                                {/* 
                                                    [...Array(product.countInStock).keys()] : to create array
                                                    {x + 1}: for increament
                                                */}
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Button 
                                            onClick={addToChartHandler}
                                            className='btn-block' 
                                            disabled={product.countInStock === 0} 
                                            type='button'>
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )
            
            
        }
        
    </div>
  )
}

export default ProductScreen