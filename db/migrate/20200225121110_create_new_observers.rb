class CreateNewObservers < ActiveRecord::Migration[6.0]
  def change
    create_table :observers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :recording, null: false, foreign_key: true

      t.timestamps
    end
  end
end
