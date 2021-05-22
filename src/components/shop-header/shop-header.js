import React from 'react'
import { connect } from 'react-redux';
import './shop-header.css'
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
   return (
      <header className="shop-header row">
         <Link to="/">
            <div className="logo text-dark">ReStore</div>
         </Link>
         
         <Link to="/cart">
            <div className="shopping-cart">
               <i className="cart-icon fa  fa-shopping-cart" ></i>
               {numItems} items (${total})
            </div>
         </Link>         
      </header>
   )
}
const mapStateTorops = ({shoppingCart: { cartItems, orderTotal }}) => {
   return {
      numItems: cartItems.length,
      total: orderTotal,
   }
}

export default connect(mapStateTorops)(ShopHeader)