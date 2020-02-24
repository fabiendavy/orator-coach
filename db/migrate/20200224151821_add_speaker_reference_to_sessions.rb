class AddSpeakerReferenceToSessions < ActiveRecord::Migration[6.0]
  def change
    add_reference :sessions, :user, index: true
  end
end
