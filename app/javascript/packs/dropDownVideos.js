const dropDownVideos = () => {
  const arrow = document.getElementById('arrow');
  const arrowEl = document.querySelector('#arrow i');
  const divWithVideos = document.querySelector('.dashboard-thumbnails-scroll');
  const divWithVideosGlob = document.querySelector('.dashboard-thumbnails');
  const dashboardVideo = document.querySelector('.dashboard-video');
  const dashboardComments = document.querySelector('.dashboard-comments');

  if (arrow) {
    arrow.addEventListener('click', () => {
      arrowEl.classList.toggle("arrow-pivot");
      divWithVideos.classList.toggle("dashboard-active");
      divWithVideosGlob.classList.toggle("no-border-bottom");
      dashboardVideo.classList.toggle("video-grid-row");
      dashboardComments.classList.toggle("comments-grid-row");
    });
  }
};

export { dropDownVideos };
