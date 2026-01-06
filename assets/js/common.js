/* =====================
   Fade-in on Scroll
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".js-fade");

  // IntersectionObserver 非対応環境対策
  if (!("IntersectionObserver" in window)) {
    fadeElements.forEach(el => {
      el.classList.add("is-show");
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));
});

/* =====================
   Hero Text Stagger
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

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
});


/* =====================
   Smooth Scroll (CTA)
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});


/* =====================
   Menu Toggle
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.menu-panel');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('is-open');

    // ☰ ⇄ ✕ 切り替え
    toggle.textContent = isOpen ? '✕' : '☰';
  });
});


/* =====================
   Info Slide Toggle
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".info-card");

  cards.forEach(card => {
    const button = card.querySelector(".info-summary");
    const body = card.querySelector(".info-body");

    if (!button || !body) return;

    button.addEventListener("click", () => {
      const isOpen = card.classList.contains("is-open");

      if (isOpen) {
        body.style.height = body.scrollHeight + "px";
        requestAnimationFrame(() => {
          body.style.height = "0";
        });
        card.classList.remove("is-open");
      } else {
        body.style.height = body.scrollHeight + "px";
        card.classList.add("is-open");
      }
    });
  });
});

