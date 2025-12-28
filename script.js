document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  slides.forEach(slide => observer.observe(slide));
});
