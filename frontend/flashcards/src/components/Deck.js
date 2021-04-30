import React from 'react'
import { Card } from 'react-bootstrap'

const Deck = props => 
    <Card>
        <Card.Title>
            {props.deck.name}
        </Card.Title>
        <Card.Body>
            <Card.Text>
                Language: {props.deck.language}
            </Card.Text>
        </Card.Body>
    </Card>

export default Deck