class RecordingsController < ApplicationController
  #:new, :create, :show
  def new
    @recording = Recording.new
  end

  def create
    @recording = Recording.new
    @recording.speaker = current_user
    @recording.status = "joining"
    @recording.access_key = Faker::Name.middle_name.downcase
    if @recording.save
      redirect_to recording_path(@recording)
    else
      render :new
    end
  end

  def show
    @recording = Recording.find(params[:id])
  end

  def update
    @recording = Recording.find(params[:id])
    @recording.video.attach()
    redirect_to dashboard_path
  end

  private

  def recording_params
    params.require(:recording).permit(:video)
  end
end
