class DeckSerializer

    def initialize(deck_object)
        @deck_object = deck_object
    end

    def to_serialized_json
        options = {
            include: [:name, :language]
        }

        @deck_object.to_json(options)
    end
end