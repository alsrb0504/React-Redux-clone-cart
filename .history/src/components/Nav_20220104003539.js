import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./Nav.css";

export default function Nav () {
    const history = useHistory();

    const cart = useSelector(store => store.cartReducer);

    console.log(cart.length);

    return (
        <nav className="nav">
            <span className="nav-title" onClick={() => history.push("/")}>Redux-market</span>
            <i onClick={() => history.push("/cart")} className="fas fa-shopping-cart">
                <div className="cart-amount">0</div>
            </i>
        </nav>
    );
}