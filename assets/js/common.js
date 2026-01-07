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
     Menu Toggle
  ===================== */

  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.menu-panel');

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('is-open');
      toggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  /* =====================
     Info Slide Toggle
  ===================== */

  document.querySelectorAll(".info-card").forEach(card => {
    const button = card.querySelector(".info-summary");
    const body = card.querySelector(".info-body");
    if (!button || !body) return;

    button.addEventListener("click", () => {
      const isOpen = card.classList.contains("is-open");
      body.style.height = isOpen ? "0" : body.scrollHeight + "px";
      card.classList.toggle("is-open");
    });
  });

});

/* =====================
   Header Scroll
===================== */

const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });
}
