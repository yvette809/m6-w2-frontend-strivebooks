import React, { Component } from 'react'
import CartItem from "./CartItem"

class Cart extends Component {
    render() {
        return (
            <div>
                {this.props.cart.map(book => <CartItem item={book} />)}
            </div>
        )
    }
}

export default Cart
