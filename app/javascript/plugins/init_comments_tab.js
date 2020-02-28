const recordingThumbnails = document.querySelectorAll(".recording-thumbnail")



const initCommentsTab = () => {

  recordingThumbnails.forEach((item) => {
    console.log(item.dataset.recordingid)
  });

}


export { initCommentsTab };
