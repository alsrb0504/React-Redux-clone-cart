import React from "react";
import "./CartItem.css";

import { deleteCart } from '../store/actions';
import { useDispatch } from 'react-redux';

export default function CartItem (item) {

    const dispatch = useDispatch();

    const product = item.item;

    return (
        <div className="cart-item">
            <img 
            className="cart-item-image"
            alt="cart-item" 
            src={product.product_img}
            />
            <span className="cart-item-name">{product.product_name}</span>
            <span className="cart-item-price" >{product.price}원</span>
            <i className="fas fa-trash-alt" onClick={() => {
                dispatch(deleteCart(item))
            }}></i>
        </div>
    );
}