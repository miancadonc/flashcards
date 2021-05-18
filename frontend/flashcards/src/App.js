// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";
import { connect } from "react-redux";
import {fetchDecks, addDeck, addCard} from './actions/deckActions'
import Deck from "./components/Deck";
import Flashcard from "./components/Flashcard";

import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import DecksPage from './containers/DecksPage'
import DeckInput from './components/DeckInput'
import CardInput from './components/CardInput'
import CardsPage from "./containers/CardsPage";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  componentDidMount(){
    
    this.props.fetchDecks()
  
  }


  render(){
    return(
      <Router>
        <div>
        <NavBar/>
        <Route exact path="/" render={() => <div><DecksPage /></div>} />
        <Route exact path="/decks" render={() => <div><DecksPage /></div>} />
        <Route path="/decks/new" render={() => <DeckInput addDeck={this.props.addDeck} />} />
        <Route path="/decks/:id/cards" render={(routerProps) => <CardsPage {...routerProps} />} />
        {/* <Route path="/decks/:id/cards" component={<CardsPage decks={this.props.decks} />} /> */}
        <Route path="/decks/:id/cards/new" render={(routerProps) => <CardInput {...routerProps} addCard={this.props.addCard} />} />
        {/* <Route path="/cards/new" render={() => <CardInput addCard={this.props.addCard} />} /> */}
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(fetchDecks()),
  addDeck: (deck) => dispatch(addDeck(deck)),
  addCard: (card) => dispatch(addCard(card))
})

export default connect(null, mapDispatchToProps)(App)


