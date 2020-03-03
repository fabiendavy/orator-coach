class CreateRessources < ActiveRecord::Migration[6.0]
  def change
    create_table :ressources do |t|
      t.string :title
      t.string :description
      t.string :ressource_url
      t.string :img_url
      t.string :thumbnail

      t.timestamps
    end
  end
end
