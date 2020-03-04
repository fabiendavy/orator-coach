class ReviewsController < ApplicationController

  def new
    @review = Review.new
    @observer = Observer.find(params[:observer_id])
    @sweet = params[:sweet]
  end

  def create
    @review = Review.new
    @observer = Observer.find(params[:observer_id])
    @review.observer = @observer
    @review.review_type = params[:commit]
    @review.save
  end

end
