import React, { Component } from 'react'
import { CartDash } from "react-bootstrap-icons"

import { Media, Badge, Button } from "react-bootstrap"

class CartItem extends Component {

    categoryToColor = (cat) => {
        switch(cat){
            case "scifi": return  "primary";
            case "horror": return "dark";
            case "romance": return "danger";
            case "fantasy": return "success";
            case "history": return "warning";
            default: return "info"
        }
    }

    priceToColor = (price) => {
        if (price > 20)
            return "danger";
        if (price > 10)
            return "warning";
        if (price > 7)
            return "primary";
        return "success";
    }


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
                    <h5 className="d-flex justify-content-between">
                        {title} 
                        <Button variant="danger" className="ml-5"><CartDash /></Button></h5>
                    <p>
                        <Badge pill variant={this.categoryToColor(category)} className="mr-3">
                            {category}
                        </Badge>
                        <Badge pill variant={this.priceToColor(price)}>
                            € {price}
                        </Badge>
                        
                    </p>
                </Media.Body>
            </Media>
        )
    }
}

export default CartItem
