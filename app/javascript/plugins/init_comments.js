const videos = document.querySelectorAll(".video")


const initComment = () => {

  videos.forEach((item) => {
    item.addEventListener("click", (event) => {
      const recordingId = item.dataset.recordingid;
    });
  });

}


export { initComment };
