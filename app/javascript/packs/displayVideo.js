const displayVideo = () => {
  const videoDiv = document.getElementById('video-display');
  const videos = document.querySelectorAll('.video');

  if (videos) {
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
