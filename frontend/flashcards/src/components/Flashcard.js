import React from 'react'
import { Card, Accordion, Button } from 'react-bootstrap'

const Flashcard = props => 
    <Accordion>
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} eventKey="0">
                    {props.flashcard.front}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Text>
                        {props.flashcard.back}
                    </Card.Text>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>

export default Flashcard