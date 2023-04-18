import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {

const [products, setProducts] = useState([])

const [cart, setCart] = useState([])


useEffect(()=>{
    fetch('products.json')
    .then(res =>res.json())
    .then(data =>{
        setProducts(data)
        // console.log(data)
    })
},[]);


// useEffect(()=>{
//     // console.log(products)
//     const storedCart = getShoppingCart();
//     // console.log(storedCart);

//     // step-1 get id
//     for(const id in storedCart){
//         // console.log(id)
//         // step-2: get the product by using id
        // const addedProduct = products.find(product => product.id === id);
//         console.log(addedProduct);

//         // step-3: get quantity of the product
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         console.log(addedProduct)
//     }
// },[products])


useEffect(()=>{
const storedCard = getShoppingCart();

const savedCart = [];
//step:1 get id of the addedProduct
for(const id in storedCard){

    //step:2 get product from products state by using id
    const addedProduct = products.find(product => product.id === id)
    if(addedProduct){
        //step:3 add quantity
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        //step:4 add the added product to the saved cart
        savedCart.push(addedProduct)
    }
    // console.log('added products', addedProduct)
}
// step: set the cart
setCart(savedCart)
},[products])



const handleAddToCart = product =>{
const newCart = [...cart, product];

setCart(newCart)
addToDb(product.id)

}



// event handler 
const handleClearCart =() =>{
    setCart([])
    deleteShoppingCart()
}



    return (
        <div className='shop-container'>
            <div className='products-container'>

{
    products.map(product =><Product
    
    key ={product.id}
    product ={product}
    handleAddToCart={handleAddToCart}
    ></Product> )
}


            </div>
            <div className='cart-container'>



<Cart cart={cart}

handleClearCart={handleClearCart}
>

<Link style={{textDecoration:'none'}} to="/orders">
    <button  className="btn-proceed">Review Order</button>
</Link>

</Cart>
            </div>
        </div>
    );
};

export default Shop;