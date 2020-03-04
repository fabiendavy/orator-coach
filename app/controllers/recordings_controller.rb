class RecordingsController < ApplicationController
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
    @recording.timestamp = params[:timestamp]
    @recording.save
    @recording.video.attach(io: params[:videodata], filename: "recording#{@recording.id}.webm", content_type: 'video/webm')
    render json: { success: 'true' }
  end

  private

  def recording_params
    params.require(:recording).permit(:video)
  end
end
