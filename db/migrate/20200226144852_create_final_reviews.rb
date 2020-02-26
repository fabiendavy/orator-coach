class CreateFinalReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :final_reviews do |t|
      t.text :comment
      t.references :observer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
