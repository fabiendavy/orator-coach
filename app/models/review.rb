class Review < ApplicationRecord
  belongs_to :observer
  belongs_to :session, through: :observer
end
