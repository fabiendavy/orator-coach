class Session < ApplicationRecord
  belongs_to :speaker, class_name: 'User', foreign_key: 'user_id'

  has_many :reviews
  has_many :observers
end
