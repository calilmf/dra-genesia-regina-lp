document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", () => {
    // Ponto de integração para analytics (evento: whatsapp_click).
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-portrait, .difference-map-intro, .map-stop, .section-intro, .care-story, .care-card, .reasons-intro, .reason-card, .path-heading, .path li, .appointment-illustration, .appointment-copy, footer > div"
);

if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  revealItems.forEach((item, index) => {
    item.dataset.reveal = "pending";
    item.style.setProperty("--reveal-delay", `${Math.min((index % 3) * 90, 180)}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.reveal = "visible";
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -32px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
