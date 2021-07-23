import React from 'react'
import { CardDeck } from 'react-bootstrap'
import { connect } from 'react-redux'
import Flashcard from '../components/Flashcard'
import { removeCard } from '../actions/deckActions'

const CardsPage = props => {
    
    const id = props.match.params.id
    const deck = props.decks.find((deck) => deck.id == id)

    const renderCards = deck.cards.map(card =>
        <Flashcard flashcard={card} removeCard={props.removeCard} />
    )

    // removeCard={props.removeCard} 
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

const mapDispatchToProps = dispatch => ({
    removeCard: (card) => dispatch(removeCard(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage)