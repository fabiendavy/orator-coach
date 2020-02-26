const finalReviewButton = document.querySelector("#final-review-button");

const finalReviewForm = document.querySelector("#final-review-form");

const displayFinalValidation = () => {

  finalReviewForm.style.display = "none";

  console.log("Salut les blaireaux");

  finalReviewButton.addEventListener("click", (event) => {
    console.log("Il a clické sur le bouton rouge !")
    // Hide
    finalReviewForm.style.display = "block";


    // Show
    // finalReviewForm.style.display = "";
  });

}

export { displayFinalValidation };
