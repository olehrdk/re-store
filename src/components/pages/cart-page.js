import React from 'react'
import ShoppingCartTable from '../shopping-cart-table'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const CartPage = ({length}) => {
   if (length === 0) {
      return <Redirect to="/" />
   }
   return (
      
      <ShoppingCartTable />
   )
}

const mapStateTorops = ({shoppingCart: { cartItems }}) => {
   return {
      length: cartItems.length,
   }
}

export default connect(mapStateTorops)(CartPage);