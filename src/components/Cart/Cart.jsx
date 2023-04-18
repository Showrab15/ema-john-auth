import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {   faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart, handleClearCart , children} ) => {


    // console.log(cart);

    let totalPrice = 0;
    let totalShipping  = 0;
    // let quantity = 0;
    let quantity = 0;
    for(const product of cart){

        // if(product.quantity === 0 ){
        //     product.quantity = 1;
        // }

        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price *  product.quantity;
        totalShipping = totalShipping + product.shipping;
        // quantity = quantity + product.quantity;
        quantity = quantity + product.quantity;
         console.log(quantity)
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax ;

    // option 2
// const cart = props.cart

// option 3 : option three used in the parameter
// const {cart} = props

    return (
        <div className='cart'>
            <h3>Order summary </h3>
<p>Selected items : {quantity}</p>
{/* <p>Selected items : {cart.length}</p> */}
<p>Total Price : ${totalPrice} </p>
<p> Total Shipping : ${totalShipping} </p>
<p>Tax : ${tax.toFixed(2)}</p>
<h3>Grand Total : ${grandTotal.toFixed(2)}</h3>
<button onClick={handleClearCart} className="btn-clear-cart"> <span>Clear cart </span>
<FontAwesomeIcon className='dlt-clear-cart-icon' icon={faTrashAlt} />

</button>
{children}
        </div>
    );
};

export default Cart;