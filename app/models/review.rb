class Review < ApplicationRecord
  belongs_to :observer

  def recording
    observer.recording
  end

end
