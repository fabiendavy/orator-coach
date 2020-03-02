const videos = document.querySelectorAll(".video")


const initComment = () => {

  videos.forEach((item) => {
    item.addEventListener("click", (event) => {
      const recordingId = item.dataset.recordingid;
      console.log (recordingId);

      $.ajax({
              url : "/dashboard",
              type : "post",
              data : { data_value: JSON.stringify(recordingId) }
          });


    });
  });

}


export { initComment };
