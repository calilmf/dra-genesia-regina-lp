document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", () => {
    // Ponto de integração para analytics (evento: whatsapp_click).
  });
});
