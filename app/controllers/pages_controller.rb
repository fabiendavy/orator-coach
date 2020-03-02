class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  before_action :set_recordings, only: [ :get_comments_received,
                                         :get_reviews_type ]

  def home
  end

  def dashboard
    @recordings = Recording.where(speaker: current_user)
    @recording = Recording.find(params[:recording_id])
    @observers = @recording.observers
  end

  def stats
    @recordings_number_speaker = Recording.where(speaker: current_user).count
    @recordings_number_observer = Observer.where(user: current_user).count
    @comments_received_number = get_comments_received
    @comments_given_number = get_comments_given
    @reviews_type_count = count_reviews_type
  end

  def library

  end

  private

  def set_recordings
    Recording.where(speaker: current_user)
  end

  def get_comments_received
    set_recordings.sum { |recording| recording.reviews.count }
  end

  def get_comments_given
    observers = Observer.where(user: current_user)

    observers.sum do |observer|
      observer.final_review? ? observer.reviews.count + 1 : observer.reviews.count
    end
  end

  def get_reviews_type
    reviews_type = []

    set_recordings.each do |recording|
      recording.reviews.each { |review| reviews_type << review.review_type.parameterize }
    end

    reviews_type
  end

  def count_reviews_type
    reviews_count = { 'speak-slower' => 0,
                      'great-pace' => 0,
                      'speak-louder' => 0,
                      'great-tone' => 0,
                      'look-at-us' => 0,
                      'good-eye-contact' => 0,
                      'stay-still' => 0,
                      'good-gesture' => 0,
                      'smile' => 0,
                      'nice-smile' => 0
                    }
    reviews_type = get_reviews_type

    reviews_type.each do |review_type|
      if reviews_count[review_type] > 0
        reviews_count[review_type] += 1
      else
        reviews_count[review_type] = 1
      end
    end

    reviews_count
  end

  def final_review
    # @recording = Recording.find()
    # @observers = Recording.observers

  end

end
