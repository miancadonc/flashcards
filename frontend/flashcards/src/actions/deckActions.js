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

export const addDeck = (deck) => {
    console.log('b')
    return (dispatch) => {
        console.log('c')
        dispatch({type: "LOADING_DECKS"})

        let configObject = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(deck)
        }

        fetch('http://localhost:3000/decks', configObject)
        .then(resp => resp.json())
        .then(json => {
            console.log('d')
            dispatch({
                type: "ADD_DECK",
                deck: json
            })
        })
        console.log('e')
    }
    console.log('f')
}

export const addCard = (card) => {
    return (dispatch) => {
        dispatch({type: "LOADING"})

        let configObject = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(card)
        }

        fetch('http://localhost:3000/cards', configObject)
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: "ADD_CARD",
                deck: json
            })
        })
    }
}