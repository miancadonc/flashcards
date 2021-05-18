class CardsController < ApplicationController

    def index
        cards = Card.all
        render json: CardSerializer.new(cards).to_serialized_json
    end

    def create
        deck = Deck.find(params[:deckId])
        deck.cards.build(front: params[:cardFront], back: params[:cardBack]).save
        render json: DeckSerializer.new(deck).to_serialized_json
    end

end
