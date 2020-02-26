class DropFinalReviewTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :final_reviews
  end
end
