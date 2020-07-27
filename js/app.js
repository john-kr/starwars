const firstFeatureImg = document.querySelector("#first-feature-img");
const secondFeatureImg = document.querySelector("#second-feature-img");
const thirdFeatureImg = document.querySelector("#third-feature-img");
const backToBtn = document.querySelector(".backtotop-btn");
const profileBtn = document.querySelector("#profile-btn");
const bioglaphyBtn = document.querySelector("#bioglaphy-btn");
const ceoProfile = document.querySelector(".ceo-profile");
const ceoBioglaphy = document.querySelector(".ceo-bioglaphy");


window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
    if (scrollHeight > 2775 && screen.width > 480) {
        firstFeatureImg.classList.add("show-img");
    } if (scrollHeight > 1250 && screen.width < 480) {
      firstFeatureImg.classList.add("show-img");
  }
});


window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
      if (scrollHeight > 3460 && this.screen.width > 480) {
          secondFeatureImg.classList.add("show-img");
      } if (scrollHeight > 1430 && screen.width < 480) {
        secondFeatureImg.classList.add("show-img");
      }
  });
  

window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
    if (scrollHeight > 4040 && this.screen.width > 480) {
        thirdFeatureImg.classList.add("show-img");
    } if(scrollHeight > 1560 && screen.width < 480) {
      thirdFeatureImg.classList.add("show-img");
    }
});

backToBtn.addEventListener("click", function() {
  scrollTo(0, 0);
})

profileBtn.addEventListener("click", function() {
  this.classList.add("btn-active");
  bioglaphyBtn.classList.remove("btn-active");
  ceoProfile.classList.add("ceo-messages-display");
  ceoProfile.classList.remove("ceo-messages-hidden");
  ceoBioglaphy.classList.remove("ceo-messages-display");
  ceoBioglaphy.classList.add("ceo-messages-hidden");
})

bioglaphyBtn.addEventListener("click", function() {
  this.classList.add("btn-active");
  profileBtn.classList.remove("btn-active");
  ceoBioglaphy.classList.add("ceo-messages-display");
  ceoBioglaphy.classList.remove("ceo-messages-hidden");
  ceoBioglaphy.classList.remove("ceo-bioglaphy");
  ceoProfile.classList.remove("ceo-messages-display")
  ceoProfile.classList.add("ceo-messages-hidden");
})