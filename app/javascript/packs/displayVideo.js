const displayVideo = () => {
  const videoDiv = document.getElementById('video-display');
  const videos = document.querySelectorAll('.video');

  if (videos) {
    const cld = cloudinary.Cloudinary.new({ cloud_name: "my-cloud", secure: true});
    let vplayer = cld.videoPlayer("video-display", { playedEventTimes: [1, 2, 3, 4, 5, 6, 7, 8] });
    vplayer.on('timeplayed', (event) => {
        console.log(event.eventData.time + " seconds played");
    })  

    videos.forEach((video) => {
      video.addEventListener('click', (event) => {
        // const url = event.currentTarget.dataset.url;
        const recordingId = video.dataset.recordingid;
        window.location.replace(`/dashboard?recording_id=${recordingId}`);
        // videoDiv.src = `https://res.cloudinary.com/fabdv/video/upload/${url}.webm`;
      });
    });
  }
};

export { displayVideo };
