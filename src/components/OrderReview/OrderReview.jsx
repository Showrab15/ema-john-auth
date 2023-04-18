import React from 'react';
import './OrderReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {   faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const OrderReview = ({product , handleRemoveFromCart}) => {

    const {img, name, id, price, quantity} = product;
    
    return (
        <div className="review-item">
<img src={img} alt="" />    

<div className="review-details">
    <p className="product-title">{name}</p>
    <p>Price : <span className='orange-text'>${price}</span> </p>
    <p>Quantity : {quantity} </p>
</div>
<button onClick={() =>handleRemoveFromCart(id)} className="btn-dlt">

<FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} />
</button>
    </div>
    );
};

export default OrderReview;