class Recording < ApplicationRecord
  belongs_to :speaker, class_name: 'User', foreign_key: 'user_id'
  has_many :observers
  has_many :reviews, through: :observers
  has_one_attached :video

  STATUS = ["joining", "pending", "recording", "done"]
  validates :status, inclusion: { in: STATUS }
  validates :access_key, uniqueness: true
end
