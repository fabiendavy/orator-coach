class Observer < ApplicationRecord
  belongs_to :user
  belongs_to :session
  has_many :reviews
end
