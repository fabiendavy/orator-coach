// const reviewButton = document.querySelectorAll(".review-btn");
const recordButton = document.getElementById("btn-start");

if (recordButton) {
  const initReviews = () => {
    recordButton.addEventListener("click", (event) => {
      const recordHit = new Date();
      const startTime = recordHit.getTime();
      console.log(startTime);
      return startTime;
    })
    // let sessionReviews = [];
    // reviewButton.forEach( button => button.addEventListener("click", (event) => {
    //   const comment = event["toElement"].value;
    //   const timeSent = new Date();
    //   const commentTime = timeSent.getTime();
    //   const review = [comment, commentTime];
    //   sessionReviews.push(review);
    //   console.log(sessionReviews);
    //   return sessionReviews;
    // }));
  }
}

export { initReviews };
