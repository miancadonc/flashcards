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

export const addDeck = (props) => {
    return (dispatch) => {
        dispatch({type: "LOADING_DECKS"})

        let configObject = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(props)
        }

        fetch('http://localhost:3000/decks', configObject)
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: "ADD_DECK",
                deck: json
            })
        })
    }
}