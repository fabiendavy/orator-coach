class AddKeywordToRessources < ActiveRecord::Migration[6.0]
  def change
    add_column :ressources, :keyword, :string
  end
end
