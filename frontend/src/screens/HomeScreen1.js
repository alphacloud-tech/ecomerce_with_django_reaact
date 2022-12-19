// import React, {useState, useEffect} from 'react'
// import {useSelector, useDispatch}  from 'react-redux'

// import {Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// // import axios from 'axios'
// import { listProducts } from '../actions/productAction'
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Product1 from '../components/Product1';
// import products  from '../products' 


function HomeScreen1() {
  const dispatch = useDispatch()
  
  const productList = useSelector((state) => state.productList)
  const {error, loading, products} = productList // we hv to distsructure n pull it out of d state

  useEffect(() => {
    dispatch(listProducts())

  }, [dispatch])

  // const products = []
  return (
    <div>
        <main className="main">
            <div className="page-content">
                <section className="intro-section">
                    <div className="owl-carousel owl-theme row owl-dot-inner owl-dot-white intro-slider animation-slider cols-1 gutter-no"
                        data-owl-options="{
                        'nav': false,
                        'dots': true,
                        'loop': false,
                        'items': 1,
                        'autoplay': false,
                        'autoplayTimeout': 8000
                    }">
                        <div className="banner banner-fixed intro-slide1" style={{backgroundColor: '#46b2e8'}}>
                            <figure>
                                <img src="assets/images/demos/demo1/slides/slide1.jpg" alt="intro-banner" style={{backgroundColor: '#34ace5', width:'1903', height: '630'}}/>
                            </figure>
                            <div className="container">
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle font-weight-bold ls-l">
                                        <span className="d-inline-block slide-animate"
                                            data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.2s'}">Buy
                                            2 Get</span>
                                        <span className="d-inline-block label-star bg-white text-primary slide-animate"
                                            data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.4s'}">1
                                            Free</span>
                                    </h4>
                                    <h2 className="banner-title font-weight-bold text-white lh-1 ls-md slide-animate"
                                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1.2s', 'delay': '1s'}">
                                        Fashionable</h2>
                                    <h3 className="font-weight-normal lh-1 ls-l text-white slide-animate"
                                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1.2s', 'delay': '1s'}">
                                        Collection</h3>
                                    <p className="slide-animate text-white ls-s mb-7"
                                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1.2s', 'delay': '1s'}">
                                        Get Free Shipping on all orders over $99.00</p>
                                    <a href="shop.html" className="btn btn-dark btn-rounded slide-animate"
                                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1.8s'}">Shop
                                        Now<i className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="banner banner-fixed intro-slide2" style={{backgroundColor: '#dddee0'}}>
                            <figure>
                                <img src="assets/images/demos/demo1/slides/slide2.jpg" alt="intro-banner" style={{backgroundColor: '#d8d9d9', width:'1903', height: '630'}} />
                            </figure>
                            <div className="container">
                                <div className="banner-content y-50 ml-auto text-right">
                                    <h4 className="banner-subtitle ls-s mb-1 slide-animate"
                                        data-animation-options="{'name': 'fadeInUp', 'duration': '.7s'}"><span
                                            className="d-block text-uppercase mb-2">Coming soon</span><strong
                                            className="font-weight-semi-bold ls-m">Riode Birthday</strong></h4>
                                    <h2 className="banner-title mb-2 d-inline-block font-weight-bold text-primary slide-animate"
                                        data-animation-options="{'name': 'fadeInRight', 'duration': '1.2s', 'delay': '.5s'}">
                                        Sale</h2>
                                    <p className="slide-animate font-primary ls-s text-dark mb-4"
                                        data-animation-options="{'name': 'fadeInUp', 'duration': '1s', 'delay': '1.2s'}">
                                        Up to 70% off on all products <br />online &amp; Free Shipping over $90</p>
                                    <a href="shop.html" className="btn btn-dark btn-rounded slide-animate"
                                        data-animation-options="{'name': 'fadeInUp', 'duration': '1s', 'delay': '1.4s'}">Shop
                                        Now<i className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="banner banner-fixed video-banner intro-slide3" style={{backgroundColor: '#dddee0'}}>
                            <figure>
                                <video src="assets/video/memory-of-a-woman.mp4" style={{width:'1903', height: '630'}} ></video>
                            </figure>
                            <div className="container">
                                <div className="banner-content x-50 y-50 text-center">
                                    <h4 className="banner-subtitle text-white text-uppercase mb-3 ls-normal slide-animate"
                                        data-animation-options="{'name': 'fadeIn', 'duration': '.7s'}">Check out our
                                    </h4>
                                    <h2 className="banner-title mb-3 text-white font-weight-bold text-uppercase ls-m slide-animate"
                                        data-animation-options="{'name': 'fadeInUp', 'duration': '.7s', 'delay': '.5s'}">
                                        Summer Season's</h2>
                                    <p className="slide-animate mb-7 text-white ls-s font-primary "
                                        data-animation-options="{'name': 'fadeInUp', 'duration': '1s', 'delay': '.8s'}">
                                        Up to 50% Off this Season’s &amp; Get free shipping<br />on all orders over
                                        $199.00</p>
                                    <a href="shop.html" className="btn btn-dark btn-rounded slide-animate mb-1"
                                        data-animation-options="{'name': 'fadeInLeft', 'duration': '1s', 'delay': '1.5s'}">Shop
                                        Now<i className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-6 appear-animate">
                        <div className="service-list">
                            <div className="owl-carousel owl-theme row cols-lg-3 cols-sm-2 cols-1" data-owl-options="{
                                    'items': 3,
                                    'nav': false,
                                    'dots': false,
                                    'loop': true,
                                    'autoplay': false,
                                    'autoplayTimeout': 5000,
                                    'responsive': {
                                        '0': {
                                            'items': 1
                                        },
                                        '576': {
                                            'items': 2
                                        },
                                        '768': {
                                            'items': 3,
                                            'loop': false
                                        }
                                    }
                                }">
                                <div className="icon-box icon-box-side icon-box1 appear-animate" data-animation-options="{
                                        'name': 'fadeInRightShorter',
                                        'delay': '.3s'
                                    }">
                                    <i className="icon-box-icon d-icon-truck"></i>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-capitalize ls-normal lh-1">Free Shipping &amp;
                                            Return
                                        </h4>
                                        <p className="ls-s lh-1">Free shipping on orders over $99</p>
                                    </div>
                                </div>

                                <div className="icon-box icon-box-side icon-box2 appear-animate" data-animation-options="{
                                        'name': 'fadeInRightShorter',
                                        'delay': '.4s'
                                    }">
                                    <i className="icon-box-icon d-icon-service"></i>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-capitalize ls-normal lh-1">Customer Support 24/7
                                        </h4>
                                        <p className="ls-s lh-1">Instant access to perfect support</p>
                                    </div>
                                </div>

                                <div className="icon-box icon-box-side icon-box3 appear-animate" data-animation-options="{
                                        'name': 'fadeInRightShorter',
                                        'delay': '.5s'
                                    }">
                                    <i className="icon-box-icon d-icon-secure"></i>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-capitalize ls-normal lh-1">100% Secure Payment
                                        </h4>
                                        <p className="ls-s lh-1">We ensure secure payment!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 mt-7 appear-animate" data-animation-options="{
                    'delay': '.3s'
                }">
                    <div className="container">
                        <h2 className="title title-center mb-5">Our Categories</h2>
                        <div className="row">
                            <div className="col-xs-6 col-lg-3 mb-4">
                                <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                    <a href="shop.html">
                                        <figure className="category-media">
                                            <img src="assets/images/categories/category1.jpg" alt="category" style={{backgroundColor: '#8c8c8d', width:'280', height: '280'}} />
                                        </figure>
                                    </a>
                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l"><a href="shop.html">For
                                                Men's</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-lg-3 mb-4">
                                <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                    <a href="shop.html">
                                        <figure className="category-media">
                                            <img src="assets/images/categories/category2.jpg" alt="category" style={{backgroundColor: '#bcbdb7', width:'280', height: '280'}} />
                                        </figure>
                                    </a>
                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l"><a
                                                href="shop.html">Accessories</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-lg-3 mb-4">
                                <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                    <a href="shop.html">
                                        <figure className="category-media">
                                            <img src="assets/images/categories/category3.jpg" alt="category" style={{backgroundColor: '#ececef', width:'280', height: '280'}}/>
                                        </figure>
                                    </a>
                                    <div className="category-content">
                                        <h4 className="category-name font-weight-bold ls-l"><a href="shop.html">Fashionable
                                                Women's</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-lg-3 mb-4">
                                <div className="category category-default1 category-absolute banner-radius overlay-zoom">
                                    <a href="shop.html">
                                        <figure className="category-media">
                                            <img src="assets/images/categories/category4.jpg" alt="category" style={{backgroundColor: '#e8eded', width:'280', height: '280'}} />
                                        </figure>
                                    </a>
                                    <div className="category-content font-weight-bold">
                                        <h4 className="category-name font-weight-bold ls-l"><a href="shop.html">Cosmetic</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-wrapper container appear-animate mt-6 mt-md-10 pt-4 pb-8"
                    data-animation-options="{
                    'delay': '.3s'
                }">
                    <h2 className="title title-center mb-5">Best Sellers</h2>
                    <div className="owl-carousel owl-theme row owl-nav-full cols-2 cols-md-3 cols-lg-4" data-owl-options="{
                        'items': 5,
                        'nav': false,
                        'loop': false,
                        'dots': true,
                        'margin': 20,
                        'responsive': {
                            '0': {
                                'items': 2
                            },
                            '768': {
                                'items': 3
                            },
                            '992': {
                                'items': 4,
                                'dots': false,
                                'nav': true
                            }
                        }
                    }">

                    {
                        loading ? <Loader />
                        : error ? <Message variant='danger'>{error}</Message>
                        : 
                        <>
                            {products?.length && products.map(product1 => (
                                <Product1 product1={product1} />
                            ))}
                        </>
                        }
                    </div>
                </section>

                <section className="banner-group mt-4">
                    <div className="container">
                        <h2 className="title d-none">Banner Group</h2>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="banner banner-3 overlay-zoom banner-fixed banner-radius content-middle appear-animate"
                                    data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1s', 'delay': '.2s'}">
                                    <figure>
                                        <img src="assets/images/demos/demo1/banners/banner1.jpg" alt="banner" style={{backgroundColor: '#836648', width:'380', height: '207'}}/>
                                    </figure>
                                    <div className="banner-content">
                                        <h3 className="banner-title text-white mb-1">For Men's</h3>
                                        <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">
                                            Starting at $29
                                        </h4>
                                        <hr className="banner-divider" />
                                        <a href="shop.html" className="btn btn-white btn-link btn-underline">Shop Now<i
                                                className="d-icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate"
                                    data-animation-options="{'name': 'fadeIn', 'duration': '1s', 'delay': '.2s'}">
                                    <figure>
                                        <img src="assets/images/demos/demo1/banners/banner2.jpg" alt="banner" style={{backgroundColor: '#1e1e1e', width:'350', height: '177'}} />
                                    </figure>
                                    <div className="banner-content d-flex align-items-center w-100 text-left">
                                        <div className="mr-auto mb-4 mb-md-0">
                                            <h4 className="banner-subtitle text-white">
                                                Up to 20% Off<br/><span className="ls-l">Black Friday</span>
                                            </h4>
                                            <h3 className="banner-title text-primary font-weight-bold lh-1 mb-0">Sale</h3>
                                        </div>
                                        <a href="shop.html"
                                            className="btn btn-primary btn-outline btn-rounded font-weight-bold text-white">Shop
                                            Now<i className="d-icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="banner overlay-zoom banner-5 banner-fixed banner-radius content-middle appear-animate"
                                    data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.2s'}">
                                    <figure>
                                        <img src="assets/images/demos/demo1/banners/banner3.jpg" alt="banner" style={{backgroundColor: '#97928b', width:'380', height: '207'}} />
                                    </figure>
                                    <div className="banner-content">
                                        <h3 className="banner-title text-white mb-1">Fashions</h3>
                                        <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">30% Off
                                        </h4>
                                        <hr className="banner-divider" />
                                        <a href="shop.html" className="btn btn-white btn-link btn-underline">Shop Now<i
                                                className="d-icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-wrapper mt-6 mt-md-10 pt-4 mb-10 pb-2 container appear-animate"
                    data-animation-options="{
                    'delay': '.6s'
                }">
                    <h2 className="title title-center">Our Featured</h2>
                    <div className="owl-carousel owl-theme row cols-2 cols-md-3 cols-lg-4 cols-xl-5" data-owl-options="{
                        'items': 5,
                        'nav': false,
                        'loop': false,
                        'dots': true,
                        'margin': 20,
                        'responsive': {
                            '0': {
                                'items': 2
                            },
                            '768': {
                                'items': 3
                            },
                            '992': {
                                'items': 4
                            },
                            '1200': {
                                'items': 5,
                                'dots': false,
                                'nav': true
                            }
                        }
                    }">
                        <div className="product text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/demos/demo1/products/product5.jpg" alt="Blue Pinafore Denim Dress"
                                        style={{backgroundColor: '#f2f3f5', width:'220', height: '245'}}/>
                                </a>
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
                                    <a href="shop-grid-3cols.html">Watches</a>
                                </div>
                                <h3 className="product-name">
                                    <a href="product.html">Fashion Electric Wrist Watch</a>
                                </h3>
                                <div className="product-price">
                                    <span className="price">$270.99</span>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:'40%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="product.html" className="rating-reviews">( 15 reviews )</a>
                                </div>
                            </div>
                        </div>
                        <div className="product text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/demos/demo1/products/product6.jpg" alt="Blue Pinafore Denim Dress"
                                     style={{backgroundColor: '#f2f3f5', width:'220', height: '245'}}/>
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">New</label>
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
                                    <a href="shop-grid-3cols.html">Women</a>
                                </div>
                                <h3 className="product-name">
                                    <a href="product.html">Hempen Hood a Mourner</a>
                                </h3>
                                <div className="product-price">
                                    <span className="price">$12.83</span>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:'20%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="product.html" className="rating-reviews">( 3 reviews )</a>
                                </div>
                            </div>
                        </div>
                        <div className="product text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/demos/demo1/products/product7.jpg" alt="Blue Pinafore Denim Dress"
                                        style={{backgroundColor: '#f2f3f5', width:'220', height: '245'}} />
                                </a>
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
                                    <a href="shop-grid-3cols.html">Women</a>
                                </div>
                                <h3 className="product-name">
                                    <a href="product.html">Women Beautiful Headgear</a>
                                </h3>
                                <div className="product-price">
                                    <span className="price">$78.24</span>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:'40%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="product.html" className="rating-reviews">( 8 reviews )</a>
                                </div>
                            </div>
                        </div>
                        <div className="product text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/demos/demo1/products/product8.jpg" alt="Blue Pinafore Denim Dress"
                                        style={{backgroundColor: '#f2f3f5', width:'220', height: '245'}} />
                                </a>
                                <div className="product-label-group">
                                    <span className="product-label label-new">New</span>
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
                                    <a href="shop-grid-3cols.html">Shoes</a>
                                </div>
                                <h3 className="product-name">
                                    <a href="product.html">Converse Training Shoes</a>
                                </h3>
                                <div className="product-price">
                                    <span className="price">$113.00</span>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:'80%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="product.html" className="rating-reviews">( 11 reviews )</a>
                                </div>
                            </div>
                        </div>
                        <div className="product text-center">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/demos/demo1/products/product9.jpg" alt="Blue Pinafore Denim Dress"
                                        style={{backgroundColor: '#f2f3f5', width:'220', height: '245'}}/>
                                </a>
                                <div className="product-label-group">
                                    <span className="product-label label-sale">27% Off</span>
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
                                    <a href="shop-grid-3cols.html">Bags & Backpacks</a>
                                </div>
                                <h3 className="product-name">
                                    <a href="product.html">Women's Fashion Handbag</a>
                                </h3>
                                <div className="product-price">
                                    <ins className="new-price">$53.99</ins><del className="old-price">$67.99</del>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:'60%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="product.html" className="rating-reviews">( 16 reviews )</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banner banner-background parallax text-center" data-option="{'offset': -60}"
                    data-image-src="assets/images/demos/demo1/parallax.jpg" style={{backgroundColor: '#2d2f33'}}>
                    <div className="container">
                        <div className="banner-content appear-animate"
                            data-animation-options="{'name': 'blurIn', 'duration': '1s', 'delay': '.2s'}">
                            <h4 className="banner-subtitle text-white font-weight-bold ls-l">
                                Extra<span className="d-inline-block label-star bg-dark text-primary ml-4 mr-2">30%
                                    Off</span>Online
                            </h4>
                            <h3 className="banner-title font-weight-bold text-white">Summer Season Sale</h3>
                            <p className="text-white ls-s">Free shipping on orders over $99</p>
                            <a href="shop.html" className="btn btn-primary btn-rounded btn-icon-right">Shop Now<i
                                    className="d-icon-arrow-right"></i></a>
                        </div>
                    </div>
                </section>

                <section className="blog-post-wrapper mt-6 mt-md-10 pt-7 appear-animate"
                    data-animation-options="{'name': 'fadeIn', 'duration': '1s'}">
                    <div className="container">
                        <h2 className="title title-center">Featured Articles</h2>
                        <div className="owl-carousel owl-theme post-slider row cols-lg-3 cols-sm-2 cols-1" data-owl-options="{
                            'nav': false,
                            'dots': true,
                            'margin': 20,
                            'responsive': {
                                '0': {
                                    'items': 1
                                },
                                '576': {
                                    'items': 2
                                },
                                '992': {
                                    'items': 3,
                                    'dots': false
                                }
                            }
                        }">
                            <div className="blog-post mb-4">
                                <article className="post post-frame overlay-zoom">
                                    <figure className="post-media">
                                        <a href="post-single.html">
                                            <img src="assets/images/blog/frame/1.jpg" alt="Blog post"
                                                style={{backgroundColor: '#919fbc', width:'340', height: '206'}}/>
                                        </a>
                                        <div className="post-calendar">
                                            <span className="post-day">19</span>
                                            <span className="post-month">JAN</span>
                                        </div>
                                    </figure>
                                    <div className="post-details">
                                        <h4 className="post-title"><a href="post-single.html">20% Off Coupon for Cyber
                                                Week</a></h4>
                                        <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                            doeiu smod tempo...</p>
                                        <a href="post-single.html" className="btn btn-primary btn-link btn-underline">Read
                                            More<i className="d-icon-arrow-right"></i></a>
                                    </div>
                                </article>
                            </div>
                            <div className="blog-post mb-4">
                                <article className="post post-frame overlay-zoom">
                                    <figure className="post-media">
                                        <a href="post-single.html">
                                            <img src="assets/images/blog/frame/2.jpg" alt="Blog post"
                                                style={{backgroundColor: '#e5e6e6', width:'340', height: '206'}} />
                                        </a>
                                        <div className="post-calendar">
                                            <span className="post-day">19</span>
                                            <span className="post-month">JAN</span>
                                        </div>
                                    </figure>
                                    <div className="post-details">
                                        <h4 className="post-title"><a href="post-single.html">20% Off Coupon for Cyber
                                                Week</a></h4>
                                        <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                            doeiu smod tempo...</p>
                                        <a href="post-single.html" className="btn btn-primary btn-link btn-underline">Read
                                            More<i className="d-icon-arrow-right"></i></a>
                                    </div>
                                </article>
                            </div>
                            <div className="blog-post mb-4">
                                <article className="post post-frame overlay-zoom">
                                    <figure className="post-media">
                                        <a href="post-single.html">
                                            <img src="assets/images/blog/frame/3.jpg" alt="Blog post"
                                                style={{backgroundColor: '#eaeef1', width:'340', height: '206'}} />
                                        </a>
                                        <div className="post-calendar">
                                            <span className="post-day">19</span>
                                            <span className="post-month">JAN</span>
                                        </div>
                                    </figure>
                                    <div className="post-details">
                                        <h4 className="post-title"><a href="post-single.html">20% Off Coupon for Cyber
                                                Week</a></h4>
                                        <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                            doeiu smod tempo...</p>
                                        <a href="post-single.html" className="btn btn-primary btn-link btn-underline">Read
                                            More<i className="d-icon-arrow-right"></i></a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-2 pb-6 pt-10 pb-md-10 appear-animate" data-animation-options="{
                    'delay': '.3s'
                }">
                    <h2 className="title d-none">Our Brand</h2>
                    <div className="container">
                        <div className="owl-carousel owl-theme row brand-carousel cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2"
                            data-owl-options="{
                            'nav': false,
                            'dots': false,
                            'autoplay': true,
                            'margin': 20,
                            'loop': true,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '576': {
                                    'items': 3
                                },
                                '768': {
                                    'items': 4
                                },
                                '992': {
                                    'items': 5
                                },
                                '1200': {
                                    'items': 6
                                }
                            }
                        }">
                            <figure><img src="assets/images/brands/1.png" alt="brand" style={{width:'180', height: '100'}}/>
                            </figure>
                            <figure><img src="assets/images/brands/2.png" alt="brand" style={{width:'180', height: '100'}} />
                            </figure>
                            <figure><img src="assets/images/brands/3.png" alt="brand" style={{width:'180', height: '100'}} />
                            </figure>
                            <figure><img src="assets/images/brands/4.png" alt="brand" style={{width:'180', height: '100'}} />
                            </figure>
                            <figure><img src="assets/images/brands/5.png" alt="brand" style={{width:'180', height: '100'}} />
                            </figure>
                            <figure><img src="assets/images/brands/6.png" alt="brand" style={{width:'180', height: '100'}} />
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="product-widget-wrapper pb-2 pb-md-10 appear-animate">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 mb-4">
                                <div className="widget widget-products appear-animate" data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.5s'
                                }">
                                    <h4 className="widget-title border-no lh-1 font-weight-bold">Sale Products</h4>
                                    <div className="products-col">
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product10.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Women’s Beautiful
                                                        Headgear</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$78.24</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'40%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product11.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Hand Electric Cell</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$26.00</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'100%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product12.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Women Hempen Hood
                                                        a Mourner</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$30.00</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'20%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4">
                                <div className="widget widget-products appear-animate" data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.3s'
                                }">
                                    <h4 className="widget-title border-no lh-1 font-weight-bold">Latest Products</h4>
                                    <div className="products-col">
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product13.jpg" alt="product"
                                                       style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Fashionable Orginal
                                                        Trucker</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$78.64</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'40%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product14.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Men Summer Sneaker</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$79.45</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'60%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product15.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Season Sports Cap</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$64.27</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'10%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4">
                                <div className="widget widget-products appear-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.3s'
                                }">
                                    <h4 className="widget-title border-no lh-1 font-weight-bold">Best of the Week</h4>
                                    <div className="products-col">
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product16.jpg" alt="product"
                                                       style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Blue Sports Shoes</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$36.00</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'10%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product17.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Fashion Handbag</a>
                                                </h3>
                                                <div className="product-price">
                                                    <ins className="new-price">$53.99</ins><del
                                                        className="old-price">$67.99</del>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'100%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product18.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Women’s Beautiful
                                                        Headgear</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$82.23</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'60%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4">
                                <div className="widget widget-products appear-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.5s'
                                }">
                                    <h4 className="widget-title border-no lh-1 font-weight-bold">Popular</h4>
                                    <div className="products-col">
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product19.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Fashion Electric Wrist
                                                        Watch</a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$270.99</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'40%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product20.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Mackintosh Poket
                                                        Backpack</a>
                                                </h3>
                                                <div className="product-price">
                                                    <ins className="new-price">$125.99</ins><del
                                                        className="old-price">$160.99</del>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'60%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product product-list-sm">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo1/products/product21.jpg" alt="product"
                                                        style={{backgroundColor: '#f2f3f5', width:'100', height: '114'}} />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product.html">Hempen Hood a
                                                        Mourner
                                                    </a>
                                                </h3>
                                                <div className="product-price">
                                                    <span className="price">$12.83</span>
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width:'10%'}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    </div>
  )
}

// export default HomeScreen1