class DeckSerializer

    def initialize(deck_object)
        @deck_object = deck_object
    end

    def to_serialized_json
        options = {
            only: [:name, :language],
            include: :cards
        }

        @deck_object.to_json(options)
    end
end