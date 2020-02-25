class Review < ApplicationRecord
  belongs_to :observer
  belongs_to :recording, through: :observer
end
