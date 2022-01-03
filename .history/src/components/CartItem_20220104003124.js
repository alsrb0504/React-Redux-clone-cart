import React from "react";
import "./CartItem.css";

export default function CartItem (item) {

    const product = item.item;
    console.log(item);

    return (
        <div className="cart-item">
            <img 
            className="cart-item-image"
            alt="cart-item" 
            src={item.item.product_img}
            />
            <span className="cart-item-name">임의의 상품</span>
            <span className="cart-item-price">10,000원</span>
            <i className="fas fa-trash-alt"></i>
        </div>
    );
}