import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {

    const savedCart = useLoaderData();

    // useEffect

    const [cart, setCart] = useState(savedCart);
    // console.log(savedCart);
    
const handleRemoveFromCart =(id)=>{

const remaining = cart.filter(product=> product.id !== id)
setCart(remaining);
removeFromDb(id)
}



const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart()
}



    return (
        <div className=" shop-container">

            <div className='review-container'>
            {
                cart.map(product => <OrderReview
                key ={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></OrderReview> )
            }
            </div>
            <div className="cart-container">
                <Cart
                 cart ={cart}
                 handleClearCart={handleClearCart}
                >


<Link style={{textDecoration:'none'}} to="/checkout"><button className="btn-proceed">Check Out</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;