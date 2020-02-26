class AddFinalReviewColumnToObserversTable < ActiveRecord::Migration[6.0]
  def change
    add_column :observers, :final_review, :text
  end
end
