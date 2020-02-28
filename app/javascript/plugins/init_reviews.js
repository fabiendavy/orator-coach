const reviewButton = document.querySelectorAll(".review-btn");

const initReviews = () => {
  let sessionReviews = [];
  reviewButton.forEach( button => button.addEventListener("click", (event) => {
    const comment = event["toElement"].value;
    const timeSent = new Date();
    const commentTime = timeSent.getTime();
    const review = [comment, commentTime];
    sessionReviews.push(review);
    console.log(sessionReviews);
  }));
}

export { initReviews };
