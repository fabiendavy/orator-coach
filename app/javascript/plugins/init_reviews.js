const reviewButton = document.querySelectorAll(".review-btn");
const recordButton = document.getElementById("btn-start");

const initReviews = () => {
  recordButton.addEventListener("click", (event) => {
    const recordHit = new Date();
    const startTime = recordHit.getTime();
    return startTime;
  })
  let sessionReviews = [];
  reviewButton.forEach( button => button.addEventListener("click", (event) => {
    const comment = event["toElement"].value;
    const timeSent = new Date();
    const commentTime = timeSent.getTime() - startTime;
    const review = [comment, commentTime];
    sessionReviews.push(review);
    return sessionReviews;
  }));
}

export { initReviews };
