const displayVideo = () => {
  const videoDiv = document.getElementById('video-display');
  const videos = document.querySelectorAll('.video');

  if (videos) {
    const cld = cloudinary.Cloudinary.new({ cloud_name: "my-cloud", secure: true});
    const reviewsType = document.querySelectorAll('.review-type');
    const reviewsTimestamp = document.querySelectorAll('.review-timestamp');
    const commentsDiv = document.querySelector('.dashboard-comments');
    let recordingTimestamp = document.getElementById('recording-timestamp');
    if (recordingTimestamp) {
      recordingTimestamp = parseInt(recordingTimestamp.value) / 1000;
    }

    // console.log(reviewsType);
    const timestamps = [];
    const types = [];
    reviewsTimestamp.forEach((review) => {
      timestamps.push(Math.floor(parseInt(review.innerText) - recordingTimestamp));
    });
    reviewsType.forEach((review) => {
      types.push(review.innerText);
    });

    let vplayer = cld.videoPlayer("video-display", { playedEventTimes: [...Array(121).keys()] });
    vplayer.on('timeplayed', (event) => {
      // console.log(event.eventData.time);
      timestamps.forEach((item, index) => {
        if (event.eventData.time === item) {
          const html = `<div class="review"><span class="review-type">${types[index]}</span> <span class="review-timestamp">00:0${item}</span></div>`;
          commentsDiv.insertAdjacentHTML('beforeend', html);
        } 
      });
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
