class DecksController < ApplicationController

    def index
        decks = Deck.all
        render json: DeckSerializer.new(decks).to_serialized_json
    end
end
