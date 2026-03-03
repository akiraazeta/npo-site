document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     Fade-in on Scroll
  ===================== */

  const fadeElements = document.querySelectorAll(".js-fade");

  if (!("IntersectionObserver" in window)) {
    fadeElements.forEach(el => el.classList.add("is-show"));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
  }

  /* =====================
     Hero Text Stagger
  ===================== */

  const hero = document.querySelector(".hero");

  if (hero) {
    const targets = hero.querySelectorAll(
      ".logo, .hero-title, .hero-lead, .btn-primary"
    );

    targets.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.transitionDelay = `${index * 0.25}s`;

      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }

  /* =====================
     Smooth Scroll
  ===================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });


/* =====================
   Info Slide Toggle
===================== */

document.addEventListener("click", function(e) {
  const summary = e.target.closest(".info-summary");
  if (!summary) return;

  const card = summary.closest(".info-card");
  const body = summary.nextElementSibling;

  const isOpen = card.classList.contains("is-open");

  if (isOpen) {
    body.style.height = body.scrollHeight + "px";
    requestAnimationFrame(() => {
      body.style.height = "0px";
    });
  } else {
    body.style.height = body.scrollHeight + "px";
  }

  card.classList.toggle("is-open");
});

  /* =====================
   Mobile Menu Toggle
===================== */

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    hamburger.textContent = isOpen ? "✕" : "☰";
    document.body.classList.toggle("no-scroll", isOpen);
  });
}
  
});

