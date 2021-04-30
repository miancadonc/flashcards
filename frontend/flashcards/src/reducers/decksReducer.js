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

        default:
            return state
    }
}

export default decksReducer