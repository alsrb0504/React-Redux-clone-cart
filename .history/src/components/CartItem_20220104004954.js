import React from "react";
import { deleteCart } from '../store/actions';
import "./CartItem.css";

export default function CartItem (item) {
    const product = item.item;

    return (
        <div className="cart-item">
            <img 
            className="cart-item-image"
            alt="cart-item" 
            src={product.product_img}
            />
            <span className="cart-item-name">{product.product_name}</span>
            <span className="cart-item-price">{product.price}원</span>
            <i className="fas fa-trash-alt" onClick={() => {
                deleteCart(item);
            }}></i>
        </div>
    );
}