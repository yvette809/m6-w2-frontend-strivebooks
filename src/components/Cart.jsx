import React, { Component } from 'react'
import CartItem from "./CartItem"
import { Container, Row } from 'react-bootstrap'

class Cart extends Component {
    render() {
        return (
            <Container className="my-5">
                <h2>Total: € {Math.round(this.props.cart.reduce((tot, item) => tot+ item.price, 0) / 100) * 100}</h2>
                {this.props.cart.map(book => <CartItem item={book} />)}
            </Container>
        )
    }
}

export default Cart
