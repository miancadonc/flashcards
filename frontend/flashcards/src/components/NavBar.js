import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/decks"
        >
          Decks
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="decks/new"
        >
          New Deck
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="cards/new"
        >
          New Card
        </NavLink>
      </div>
    );
}

export default NavBar