import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
                <Link to="/">
                <div className="logo text-dark">BarberShop</div>
                </Link>
              <Link to="/sub">
            <div className="shopping-cart">
                    <i className="cart-icon fa fa-scissors" />
                    {numItems} items (${total})
                </div>
              </Link>
        </header>
    );
};


export default ShopHeader;