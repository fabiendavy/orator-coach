const reviewButtons = document.querySelectorAll(".relative")

const initBadge = () => {

  reviewButtons.forEach((item) => {
      const badge = item.querySelector(".badge-count")
      let badgeCount = 0;
    item.addEventListener("click", (event) => {
      badge.style.display = "flex";
      badgeCount += 1;
      console.log(badgeCount);
      badge.innerText = badgeCount;
    });
  });

}


export { initBadge };
