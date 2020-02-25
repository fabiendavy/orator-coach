class AddKeyColumnToRecordings < ActiveRecord::Migration[6.0]
  def change
    add_column :recordings, :access_key, :string
  end
end
