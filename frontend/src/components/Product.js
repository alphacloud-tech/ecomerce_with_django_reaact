
import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

function Product({product}) { // i hv destructure d props here
  
    return (
    <Card className="my-3 p-3 rounded">
    {/* we use backtips so dat we will be able to pass
    variable of d id n actual product id */}
        <a href={`/product/${product._id}`}> 
            <Card.Img src={product.image} />
        </a>
        <Card.Body>
            <a href={`/product/${product._id}`}> 
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>

            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews

                    <Rating 
                        value={product.rating} 
                        text={`${product.numReviews} reviews`} 
                        color={"#f8e825"}
                    />
                </div>
            </Card.Text>

            <Card.Text as="h3">
                <div className="my-3">
                    ${product.price}
                </div>
            </Card.Text>
            
        </Card.Body>
    </Card>
  )
}

export default Product