import React, { Component } from 'react'

import { Media } from "react-bootstrap"

class CartItem extends Component {
    render() {

        const { title, img, category, asin, price } = this.props.item

        return (
    <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={img}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>title</h5>
    <p>
      {category}
    </p>
  </Media.Body>
</Media>            
        )
    }
}

export default CartItem
