class CreateDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.string :name
      t.string :language
      t.string :category

      t.timestamps
    end
  end
end
