document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides-container");
  const slides = document.querySelectorAll(".slide-page");
  const totalSlides = slides.length;
  let currentIndex = 0;

  // -----------------------
  // 自動スライド（3秒ごと）
  // -----------------------
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000);

  // -----------------------
  // ボタン操作スライド（任意）
  // -----------------------
  // もし左右ボタンを作る場合の例
  const nextBtn = document.querySelector("#nextBtn");
  const prevBtn = document.querySelector("#prevBtn");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }
});
