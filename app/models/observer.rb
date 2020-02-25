class Observer < ApplicationRecord
  belongs_to :user
  belongs_to :recording
  has_many :reviews
end
