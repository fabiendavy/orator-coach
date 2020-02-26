class ReviewsController < ApplicationController

  def new
    @review = Review.new
    @observer = Observer.find(params[:observer_id])
  end

  def create
    @review = Review.new
    @observer = Observer.find(params[:observer_id])
    @review.observer = @observer
    @review.review_type = params[:commit]
    @review.save
    # redirect_to new_observer_review_path(@observer)
  end

end
