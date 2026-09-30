// Small interaction: reveal sections as they enter the viewport.
const sections = document.querySelectorAll(".section, .hero-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.08 });

sections.forEach((section) => observer.observe(section));
