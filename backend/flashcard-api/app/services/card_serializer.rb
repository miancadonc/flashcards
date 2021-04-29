class CardSerializer

    def initialize(card_object)
        @card_object = card_object
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }

        @card_object.to_json(options)
    end
end