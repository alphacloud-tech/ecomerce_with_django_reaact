
// import React from 'react'
// import { Card } from 'react-bootstrap';
// import Rating from './Rating';

function Product1({product1}) { // i hv destructure d props here
  
    return (
        <div className="product text-center">
            <figure className="product-media">
                <a href={`/product/${product1._id}`}>
                    <img src={product1.image} alt="Blue Pinafore Denim Dress"
                        style={{backgroundColor: '#f2f3f5', width:'280', height: '315'}} />
                </a>
                <div className="product-label-group">
                    <label className="product-label label-new">new</label>
                </div>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                        data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i></a>
                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                            className="d-icon-heart"></i></a>
                </div>
                <div className="product-action">
                    <a href="#" className="btn-product btn-quickview" title="Quick View">Quick View</a>
                </div>
            </figure>
            <div className="product-details">
                <div className="product-cat">
                    <a href="shop-grid-3cols.html">Clothing</a>
                </div>
                <h3 className="product-name">
                    <a href={`/product/${product1._id}`}>{product1.name}</a>
                </h3>
                <div className="product-price">
                    <span className="price">${product1.price}</span>
                </div>
                <div className="ratings-container">
                    {/* {product1.rating} from {product1.numReviews} reviews */}

                        <Rating 
                            value={product1.rating} 
                            text={`${product1.numReviews} reviews`} 
                            color={"#f8e825"}
                        />
                    {/* <div className="ratings-full">
                        <span className="ratings" style={{width :'100%'}}>
                        </span>
                        <span className="tooltiptext tooltip-top"> {product1.numReviews} </span>
                    </div> */}
                    <a href="product.html" className="rating-reviews">( {product1.rating} from {product1.numReviews} reviews)</a>
                </div>
            </div>
        </div>
    
  )
}

// export default Product1