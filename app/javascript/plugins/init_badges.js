const reviewButtons = document.querySelectorAll(".btn-div")
// const badges = document.querySelectorAll(".badge-count")



const initBadge = () => {

  reviewButtons.forEach((item) => {
      const badge = item.querySelector(".badge-count")
      let badgeCount = 0;
    item.addEventListener("click", (event) => {
      badge.style.display = "flex";
      badgeCount += 1;
      badge.innerText = badgeCount;
    });
  });

}


export { initBadge };
