class Ressource < ApplicationRecord
  validates :title, :description, :ressource_url, :img_url, :keyword, presence: true
end
