export const fetchDecks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_DECKS"})

        fetch('http://localhost:3000/decks')
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: "ADD_DECKS",
                decks: json
            })
        })
    }
}