class ObserversController < ApplicationController

  def new
    @observer = Observer.new
    @access_key = params[:access_key]
  end

  def create
    @observer = Observer.new
    @observer.user = current_user
    @input_key = params[:observer][:client_key]
    @access_key = params[:access_key]
    raise
    # if @input_key == @access_key
    #   @observer = Observer.create(user_id: @user.id, recording_id: )
    # else
    #   redirect_to new_observer_path
    # end
  end

end
