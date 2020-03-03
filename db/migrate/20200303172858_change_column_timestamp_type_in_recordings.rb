class ChangeColumnTimestampTypeInRecordings < ActiveRecord::Migration[6.0]
  def change
    change_column :recordings, :timestamp, :string
  end
end
