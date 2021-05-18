import React from 'react'
import { Component } from 'react'
import { CardDeck } from 'react-bootstrap'
import { connect } from 'react-redux'
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

    handleLoading = (searchResults) => {
        if(this.props.loading === false && !!this.props.decks[0]){
          return(
          <div>
                <CardDeck>
                    {this.renderDecks(searchResults)}
                </CardDeck>
          </div>
          
          )
        }
      }

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
                {this.handleLoading(searchResults)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    decks: state.decks,
    loading: state.loading
})

export default connect(mapStateToProps)(DecksPage)