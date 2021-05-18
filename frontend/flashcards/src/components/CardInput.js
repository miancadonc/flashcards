import React, {Component} from 'react'

class CardInput extends Component {
    state = {
        cardFront: "",
        cardBack: "",
        deckId: this.props.match.params.id
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    handleOnSubmit(event) {
        event.preventDefault()
        this.props.addCard(this.state)
        this.setState({
          cardFront: "",
          cardBack: ""
        })
    }
    
    render() {
        return (
          <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                name="cardFront"
                value={this.state.cardFront}
                placeholder="card front" />
                <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                name="cardBack"
                value={this.state.cardBack}
                placeholder="card back" />
                <input type="submit" />
            </form>
          </div>
        )
      } 
}

export default CardInput