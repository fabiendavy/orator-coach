const displayVideo = () => {
  const videoDiv = document.getElementById('video-display');
  const videos = document.querySelectorAll('.video');

  const icons = {
    "Speak slower": '<div class="bad-review"><i class="fas fa-bullhorn"></i> <i class="fas fa-minus"></i></div>',
    "Speak louder": '<div class="bad-review"><i class="fas fa-bullhorn"></i> <i class="fas fa-plus"></i></div>',
    "Look at us": '<div class="bad-review"><i class="fas fa-eye"></i> <i class="fas fa-arrow-right"></i> <i class="fas fa-male"></i></div>',
    "Stay still": '<div class="bad-review"><i class="fas fa-male"></i> <i class="fas fa-plus"></i></div>',
    "Smile": '<div class="bad-review"><i class="fas fa-smile"></i> <i class="fas fa-plus"></i></div>',
    "Great pace": '<div class="good-review"><i class="fas fa-thumbs-up"></i></div>',
    "Great tone": '<div class="good-review"><i class="fas fa-thumbs-up"></i></div>',
    "Good eye contact": '<div class="good-review"><i class="fas fa-eye"></i> <i class="fas fa-thumbs-up"></i></div>',
    "Good gesture": '<div class="good-review"><i class="fas fa-walking"></i> <i class="fas fa-thumbs-up"></i></div>',
    "Nice smile": '<div class="good-review"><i class="fas fa-smile"></i> <i class="fas fa-thumbs-up"></i></div>'
  };

  if (videos && videoDiv) {
    const cld = cloudinary.Cloudinary.new({ cloud_name: "my-cloud", secure: true});
    const reviewsType = document.querySelectorAll('.review-type');
    const reviewsTimestamp = document.querySelectorAll('.review-timestamp');
    const commentsDiv = document.querySelector('.dashboard-comments');
    const animCommentsDiv = document.querySelector('.dashboard-animated-comments');
    let recordingTimestamp = document.getElementById('recording-timestamp');
    if (recordingTimestamp) {
      recordingTimestamp = parseInt(recordingTimestamp.value) / 1000;
    }

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
          animCommentsDiv.insertAdjacentHTML('beforeend', icons[types[index]]);
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
