document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides-container");
  const slidePages = document.querySelectorAll(".slide-page");
  const totalSlides = slidePages.length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  // 3秒ごとに自動スライド
  setInterval(nextSlide, 3000);
});
