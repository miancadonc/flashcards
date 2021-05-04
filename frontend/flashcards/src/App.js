// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";
import { connect } from "react-redux";
import {fetchDecks} from './actions/deckActions'
import Deck from "./components/Deck";
import Flashcard from "./components/Flashcard";

import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

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

  handleLoading = () => {
    if(this.props.loading === false && !!this.props.decks[0]){
      return(
      <div>
        <Deck deck={this.props.decks[0]}/>
        <Flashcard flashcard={this.props.decks[0].cards[0]} />
      </div>
      
      )
    }
  }

  render(){
    return(
      <div>
        <h1>I'm working!</h1>
        {this.handleLoading()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(fetchDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
