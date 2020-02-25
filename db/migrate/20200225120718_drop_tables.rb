class DropTables < ActiveRecord::Migration[6.0]
  def change
    drop_table :reviews
    drop_table :observers
    drop_table :sessions
  end
end
