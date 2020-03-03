class AddTimestampToRecordings < ActiveRecord::Migration[6.0]
  def change
    add_column :recordings, :timestamp, :string
  end
end
