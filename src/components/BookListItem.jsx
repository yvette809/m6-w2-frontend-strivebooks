import React, { Component } from 'react'
import { Col, Image, Button, Card} from "react-bootstrap"

class BookListItem extends Component {
    render() {

        const { asin, title, img, price, category} = this.props.item

        return (
            <Col md={4}>
                <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {category} - € {price}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default BookListItem
