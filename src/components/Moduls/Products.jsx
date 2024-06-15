import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Products = () => {
    const [Items, setItems] = useState([
        {
            id: 1,
            product_name: "sofa",
            price: 999,
            Image: "/sofa.webp",
        },
        {
            id: 2,
            product_name: "Dining table ",
            price: 999,
            Image: "/table.webp",
        },
        {
            id: 3,
            product_name: "living",
            price: 999,
            Image: "/living.webp",
        },
        {
            id: 4,
            product_name: "frame ",
            price: 999,
            Image: "/frame.webp"
        }
    ])
  return (
    <Container className='row'>
        {Items.map((elem) => {
            return (
                <Card Key={elem.id} className='col-md-3'> 
                    <Card.Img  variant='top' src={process.env.PUBLIC_URL + elem.Image} />
                    <Card.Body>
                        <Card.Title>{elem.product_name}</Card.Title>
                        <Card.Text>${elem.price}</Card.Text>
                        <Button>Buy Now</Button>
                    </Card.Body>
                </Card>
            )
        })}
    </Container>
  )
}

export default Products