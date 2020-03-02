class RecordingsController < ApplicationController
  #:new, :create, :show
  def new
    @recording = Recording.new
  end

  def create
    @recording = Recording.new
    @recording.speaker = current_user
    # @recording.timestamp =
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
    # @blob_url = params[:recording][:video]
    # blob = ActiveStorage::Blob.create_before_direct_upload!(
    #   filename: blob_url,
    #   content_type: "video/webm"
    # )
    # @recording.video.attach(blob)
    # @recording.video.attach(params[:videodata])
    # binding.pry
    @recording.video.attach(io: params[:videodata], filename: "recording#{@recording.id}.webm", content_type: 'video/webm')

    # @recording.video.attach(io: File.open(params[:videodata].path), filename: "recording#{@recording.id}.webm", content_type: 'video/webm')

    # @recording.video.attach(io: params[:videourl], filename: "recording#{@recording.id}.webm", content_type: 'video/webm')

    # todo 
    # params[:videodata]
    # attach
    # redirect_to dashboard_path
    render json: { success: 'true' }
  end

  private

  def recording_params
    params.require(:recording).permit(:video)
  end
end
