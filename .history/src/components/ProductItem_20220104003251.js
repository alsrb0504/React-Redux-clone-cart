import React from "react";
import "./ProductItem.css";

import { useDispatch } from 'react-redux';
import { addCart } from '../store/actions';

export default function ProductItem ({ item }) {

    const dispatch = useDispatch();

    return (
        <div className="product-item">
            <img
            className="item-image" 
            alt="product"
            src={item.product_img} />
            <div className="item-name">{item.product_name}</div>
            <div className="item-price">{item.price.toLocaleString()}원</div>
            <button onClick={() => {dispatch(addCart(item))}} className="add-cart-btn">
                <i className="fas fa-plus"></i>
                장바구니 담기
            </button>
        </div>
    );
}