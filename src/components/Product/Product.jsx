import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    //  console.log(props)
    const {name,ratings , img, seller, price} = props.product;
 

        const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6>{name}</h6> 
            <p>price : {price}</p>
            <p>Manufacturer : {seller} </p>
            <p>Rating : {ratings}</p>
           </div>
           <button  onClick={()=>handleAddToCart(props.product)} className='cart-btn'>Add to cart 
           <FontAwesomeIcon className='icon' icon={faShoppingCart} />

           </button>
        </div>
    );
};

export default Product;