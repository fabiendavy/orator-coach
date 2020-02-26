class ReviewsController < ApplicationController

  def new
    raise
    @review = Review.new
    @observer = Observer.find(params[:observer_id])
    raise
  end

end
