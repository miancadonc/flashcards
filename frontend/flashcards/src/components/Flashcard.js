import React from 'react'
import { Card, Accordion } from 'react-bootstrap'

const Flashcard = props => 
    <Card>
        <Card.Title>
            {props.flashcard.front}
        </Card.Title>
        <Card.Body>
            <Card.Text>
                {props.flashcard.back}
            </Card.Text>
        </Card.Body>
    </Card>

export default Flashcard