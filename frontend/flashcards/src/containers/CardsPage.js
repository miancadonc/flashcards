import React from 'react'
import { CardDeck } from 'react-bootstrap'
import { connect } from 'react-redux'
import Flashcard from '../components/Flashcard'

const CardsPage = props => {
    
    const id = props.match.params.id
    const deck = props.decks.find((deck) => deck.id == id)

    const renderCards = deck.cards.map(card =>
        <Flashcard flashcard={card}/>
    )

    return(
        <CardDeck>
            {renderCards}
        </CardDeck>
        // <h1>{deck.id}</h1>
    )
}

const mapStateToProps = state => ({
    decks: state.decks,
    loading: state.loading
})

export default connect(mapStateToProps)(CardsPage)