import React from 'react'
import { Component } from 'react'
import { CardDeck } from 'react-bootstrap'
import Deck from '../components/Deck'

class DecksPage extends Component {
    state = {
        searchInput: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderDecks = (searchResults) => searchResults.map(deck =>
        <Deck key={deck.id} deck={deck}/>
    )

    render(){
        const searchResults = this.props.decks.filter(deck => deck.name.includes(this.state.searchInput))
        return(
            <div>
                <input 
                type="text"
                name="searchInput"
                placeholder="search"
                onChange={(e) => this.handleOnChange(e)}
                />
                <CardDeck>
                    {this.renderDecks(searchResults)}
                </CardDeck>
            </div>
        )
    }
}

export default DecksPage