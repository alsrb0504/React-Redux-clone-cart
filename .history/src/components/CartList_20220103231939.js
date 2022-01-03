import React from "react";
import { useSelector } from 'react-redux';
import CartItem from "./CartItem";
import "./CartList.css";


export default function CartList () {
    const cart = useSelector(store => store.acrtReducer);

    return (
        <section className="cart-list">
            <h2 className="cart-list-title">장바구니</h2>
            <CartItem />
        </section>
    );
}