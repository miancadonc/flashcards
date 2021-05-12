import React, {Component} from 'react'

class DeckInput extends Component {
    state = {
        deckName: "",
        deckLanguage: ""
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    handleOnSubmit(event) {
        event.preventDefault()
        this.props.addDeck(this.state)
        this.setState({
          deckName: '',
          dedckLanguage: ''
        })
    }
    
    render() {
        return (
          <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                name="deckName"
                value={this.state.deckName}
                placeholder="deck name" />
                <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                name="deckLanguage"
                value={this.state.deckLanguage}
                placeholder="deck language" />
                <input type="submit" />
            </form>
          </div>
        )
      } 
}

export default DeckInput