class AddNewTables < ActiveRecord::Migration[6.0]
  def change
    create_table :recordings do |t|
      t.string :status
      t.timestamps
    end
  end
end
