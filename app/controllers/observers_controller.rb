class ObserversController < ApplicationController

before_action :set_observer, only:[ :update, :final_review ]

  def new
    @observer = Observer.new
  end

  def create
    # Create a new (empty) observer instance
    @observer = Observer.new

    # Get access_key entered by observer and search for corresponding recording
    @input_key = params[:observer][:client_key]
    @recording = Recording.find_by(access_key: @input_key)
    
    # If the key entered by the observer matches a recording key, then create a new observer, else render new
    if @recording
      # Set keys of the observer instance
      @observer.user = current_user
      @observer.recording = @recording
      @observer.save
      redirect_to new_observer_review_path(@observer)
    else
      redirect_to new_observer_path
    end
  end


  def update
    # @observer = Observer.find(params[:id])
    @observer.final_review = params[:observer][:final_review]
    @observer.save
    redirect_to '/dashboard'
  end

  def final_review
    # @observer = Observer.find(params[:id])
  end

  private

  def set_observer
    @observer = Observer.find(params[:id])
  end

end
