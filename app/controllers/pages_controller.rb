class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def dashboard
    @recordings = Recording.where(speaker: current_user)
  end

  def stats
    @recordings_number_speaker = Recording.where(speaker: current_user).count
    @recordings_number_observer = Observer.where(user: current_user).count
    @comments_received_number = get_comments_received
    @comments_given_number = get_comments_given
  end

  def library

  end

  private

  def get_comments_received
    recordings = Recording.where(speaker: current_user)
    recordings.sum { |recording| recording.reviews.count }
  end

  def get_comments_given
    observers = Observer.where(user: current_user)
    observers.sum do |observer|
      observer.final_review? ? observer.reviews.count + 1 : observer.reviews.count
    end
  end

  def get_reviews_type

  end
end
