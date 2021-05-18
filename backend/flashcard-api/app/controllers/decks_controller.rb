class DecksController < ApplicationController

    def index
        decks = Deck.all
        render json: DeckSerializer.new(decks).to_serialized_json
    end

    def create
        deck = Deck.create(name: params[:deckName], language: params[:deckLanguage])
        render json: DeckSerializer.new(deck).to_serialized_json
    end

end
