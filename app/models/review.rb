class Review < ApplicationRecord
  belongs_to :observer
  belongs_to :session
end
