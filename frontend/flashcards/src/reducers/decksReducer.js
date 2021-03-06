const decksReducer = (state = {
    decks: [],
    loading: false
}, action) => {
    switch(action.type){
        case "LOADING_DECKS":
            return {
                ...state,
                decks: [...state.decks],
                loading: true
            }

        case "ADD_DECKS":
            return {
                ...state,
                decks: action.decks,
                loading: false
            }

        case "ADD_DECK":
            return {
                ...state,
                decks: state.decks.concat({name: action.deck.name, language: action.deck.language, id: action.deck.id, cards: []}),
                loading: false
            }

        case "ADD_CARD":
            return {
                ...state,
                decks: Object.assign([], [...state.decks.filter(deck => deck.id !== action.deck.id)]).concat({name: action.deck.name, language: action.deck.language, id: action.deck.id, cards: action.deck.cards}),
                loading: false
            }

        default:
            return state
    }
}

export default decksReducer