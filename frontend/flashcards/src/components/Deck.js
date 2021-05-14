import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Deck = props => 
    <Card id={props.deck.id} >
        <Card.Title>
            {props.deck.name}
        </Card.Title>
        <Card.Body>
            <Card.Text>
                Language: {props.deck.language}
            </Card.Text>
            <Link to={`/decks/${props.deck.id}/cards`} >View Cards</Link>
            <Link to={`/decks/${props.deck.id}/cards/new`} >Add Card</Link>
        </Card.Body>
    </Card>

export default Deck