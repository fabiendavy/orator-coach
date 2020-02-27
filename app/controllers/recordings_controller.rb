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
    binding.pry
    @recording = Recording.find(params[:id])
    # @blob_url = params[:recording][:video]
    # blob = ActiveStorage::Blob.create_before_direct_upload!(
    #   filename: blob_url,
    #   content_type: "video/webm"
    # )
    # @recording.video.attach(blob)
    # @recording.video.attach(params[:videodata])
    @recording.video.attach(io: params[:videodata].tempfile.open, filename: "recording#{@recording.id}", content_type: 'video/webm')
    # todo 
    # params[:videodata]
    # attach
    redirect_to dashboard_path
  end

  private

  def recording_params
    params.require(:recording).permit(:video)
  end
end
