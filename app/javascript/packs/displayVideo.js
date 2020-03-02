const displayVideo = () => {
  const videoDiv = document.getElementById('video-display');
  const videos = document.querySelectorAll('.video');
  console.log(videoDiv);
  console.log(videos);

  if (videos) {
  console.log("Salut les moches");
    videos.forEach((video) => {
      video.addEventListener('click', (event) => {
        console.log(event);
        const url = event.currentTarget.dataset.url;
        const recordingId = video.dataset.recordingid;
        console.log(recordingId);
        videoDiv.src = `https://res.cloudinary.com/fabdv/video/upload/${url}.webm`;
        console.log(`http://localhost:3000/dashboard?recording_id=${recordingId}`);
        window.location.replace(`http://localhost:3000/dashboard?recording_id=${recordingId}`);
      });
    });
  }
};

export { displayVideo };
