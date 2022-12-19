import React, {useEffect} from 'react'
import {useSelector, useDispatch}  from 'react-redux'

import {Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
// import axios from 'axios'
import { listProducts } from '../actions/productAction'
import Loader from '../components/Loader';
import Message from '../components/Message';
// import products  from '../products' 


/** 
function HomeScreen() {
  const [products, setProducts] = useState([]);

  // useEffect get reloaded every single time or triggerd 
  // everytime the component loads or when a state value get
  // updated
  useEffect(() => {
    // console.log("useeffect tiggered");

    async function fetchProducts() { // in order to use await we nid to wrap d call inside async function
      const { data } = await axios.get('/api/products/') // instead of using .then promise
      setProducts(data)
      // console.log(data._id);
    }

    fetchProducts() // call d function
  
  }, []) 

*/ 

function HomeScreen() {
  const dispatch = useDispatch()
  /**
   * useSelector : to display d state
   * remember : product list is lk a subpart of dat state i.e
   * from productAction. if u go to our productReducer u will see
   * dat we hv more uption lk products, loading and error
   */
  const productList = useSelector((state) => state.productList)
  const {error, loading, products} = productList // we hv to distsructure n pull it out of d state

  useEffect(() => {
    dispatch(listProducts())

  }, [dispatch])

  // const products = []
  return (
    <div>
        Latest Product
        {
          loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
          : 
          <Row>
            {products?.length && products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
          </Row>
        }
        
    </div>
  )
}

export default HomeScreen