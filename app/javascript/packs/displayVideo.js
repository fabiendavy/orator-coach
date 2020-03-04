const displayVideo = () => {
  const videoDiv = document.getElementById('video-display');
  const videos = document.querySelectorAll('.video');

  const animIcons = {
    "Speak slower": '<div class="bad-review">😢</div>',
    "Speak louder": '<div class="bad-review">😢</div>',
    "Look at us": '<div class="bad-review">😢</div>',
    "Stay still": '<div class="bad-review">😢</div>',
    "Smile": '<div class="bad-review">😢</div>',
    "Great pace": '<div class="good-review">😍</div>',
    "Great tone": '<div class="good-review">😍</div>',
    "Good eye contact": '<div class="good-review">😍</div>',
    "Good gesture": '<div class="good-review">😍</div>',
    "Nice smile": '<div class="good-review">😍</div>'
  };

  const reviewsIcons = {
    "Speak slower": '<i class="fas fa-thumbs-down"></i>',
    "Speak louder": '<i class="fas fa-thumbs-down"></i>',
    "Look at us": '<i class="fas fa-thumbs-down"></i>',
    "Stay still": '<i class="fas fa-thumbs-down"></i>',
    "Smile": '<i class="fas fa-thumbs-down"></i>',
    "Great pace": '<i class="fas fa-thumbs-up"></i>',
    "Great tone": '<i class="fas fa-thumbs-up"></i>',
    "Good eye contact": '<i class="fas fa-thumbs-up"></i>',
    "Good gesture": '<i class="fas fa-thumbs-up"></i>',
    "Nice smile": '<i class="fas fa-thumbs-up"></i>'
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

    // Method to convert seconds in min:sec format
    const timeConverter = (seconds) => {
      let min = Math.floor(seconds / 60);
      let sec = seconds - (min * 60)
      let time;
      if (sec < 10) {
        time = `${min}:0${sec}`
      } else {
        time = `${min}:${sec}`
      }
      return time
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
          const html = `<div class="review"><span style="width: 25%;">${reviewsIcons[types[index]]}</span><span class="review-type" style="width: 75%;">${types[index]}</span> <span class="review-timestamp">${timeConverter(item)}</span></div>`;
          commentsDiv.insertAdjacentHTML('beforeend', html);
          animCommentsDiv.insertAdjacentHTML('beforeend', animIcons[types[index]]);
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
