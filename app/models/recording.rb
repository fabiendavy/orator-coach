class Recording < ApplicationRecord
  belongs_to :speaker, class_name: 'User', foreign_key: 'user_id'
  has_many :reviews, through: :observer
  has_many :observers

  STATUS = ["joining", "pending", "recording", "done"]
  validates :status, inclusion: { in: STATUS }
  validates :access_key, uniqueness: true
end
