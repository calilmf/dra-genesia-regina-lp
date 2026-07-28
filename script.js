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

if (new URLSearchParams(window.location.search).get("versao") === "completa") {
  document.documentElement.classList.add("copy-completa");
  document.title = "Dra. Genésia Regina | Ortopedia Pediátrica — Versão completa";

  const replaceText = (selector, values) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index]) element.textContent = values[index];
    });
  };
  const replaceHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  };

  replaceHtml(".hero h1", "Para cada passo do crescimento,<br><em>uma decisão em família.</em>");
  replaceText(".hero-text", ["Avaliação ortopédica especializada para crianças e adolescentes, com escuta ativa, explicações claras e escolhas feitas junto de quem cuida."]);
  replaceHtml("#difference-map-title", "Um caminho de cuidado<br><em>feito para a sua família.</em>");
  replaceText(".difference-map-intro > p:not(.eyebrow)", ["Cada ponto do percurso representa uma forma de tornar o cuidado mais acessível, claro e próximo."]);
  replaceText(".map-stop p", [
    "Hospital Brasília, Asa Norte e Planaltina.",
    "Mais possibilidades para a sua família cuidar com tranquilidade.",
    "Orientação para famílias de todo o Brasil, conforme as normas vigentes.",
    "Acompanhamento para cada fase do desenvolvimento.",
    "Escuta ativa, explicações claras e decisões compartilhadas.",
    "Experiência voltada ao movimento e ao crescimento infantil."
  ]);

  replaceHtml(".section-intro .eyebrow", "<span></span> Um olhar para a história inteira");
  replaceHtml(".section-intro h2", "Antes de qualquer decisão,<br><em>é preciso entender a história inteira.</em>");
  replaceText(".care-story .lead", ["Antes de olhar um exame, é preciso ouvir o que mudou na rotina, nas brincadeiras e no jeito de a criança se movimentar."]);
  replaceText(".care-story > p:not(.lead)", ["Na consulta, a família ajuda a construir o quadro completo. A avaliação combina exame detalhado, escuta ativa e explicações claras para transformar preocupação em compreensão. Assim, a família encontra um próximo passo seguro."]);
  replaceText(".care-card p", [
    "Quando começou, o que incomoda e como isso aparece em casa, na escola ou nas brincadeiras.",
    "Pais e responsáveis conhecem o movimento, o ritmo e as dúvidas que acompanham cada fase.",
    "Observar, investigar ou tratar: cada caminho é explicado com calma antes de qualquer escolha."
  ]);

  replaceHtml(".reasons-intro h2", "Sinais que merecem<br><em>uma avaliação especializada.</em>");
  replaceText(".reasons-intro > p", ["Alterações persistentes no jeito de caminhar, nos pés ou no alinhamento das pernas merecem atenção. Uma avaliação no momento certo pode trazer mais segurança para o desenvolvimento."]);
  replaceText(".reason-card p", [
    "Quando a forma de caminhar chama atenção ou a criança anda repetidamente na ponta dos pés, é importante investigar a causa.",
    "Alterações na forma dos pés, assimetrias ou dificuldades ao caminhar merecem uma avaliação especializada.",
    "Pernas em X ou O que persistem durante o crescimento devem ser avaliadas para orientar o acompanhamento adequado.",
    "Assimetrias nos ombros, no tronco ou na postura durante o crescimento merecem avaliação especializada.",
    "Dores recorrentes nas pernas, especialmente no fim do dia ou durante a noite, merecem atenção e orientação especializada.",
    "Dúvidas sobre o desenvolvimento do quadril, pé torto congênito ou outras deformidades merecem orientação precoce."
  ]);

  replaceHtml(".specialist h2", "Excelência técnica com a delicadeza que a infância pede.");
  replaceText(".specialist-copy > p:not(.eyebrow):not(.signature)", [
    "Especialista em Ortopedia e Traumatologia, com fellowship em Ortopedia Pediátrica pela Rede SARAH de Hospitais de Reabilitação. Atua no cuidado de crianças, adolescentes e adultos jovens, valorizando a escuta, a comunicação clara e a participação da família em cada decisão.",
    "Com uma prática orientada por evidências científicas e medicina centrada na pessoa, traduz cada avaliação em informação compreensível. Assim, a família sabe o que está acontecendo, conhece as opções e participa com segurança das escolhas do tratamento."
  ]);
  replaceText(".facts dd", ["Medicina pela ESCS / UnDF", "Ortopedia e Traumatologia pela SES-DF", "Ortopedia Pediátrica pela Rede SARAH, em Brasília", "Ambulatório de Ortopedia Pediátrica no Hospital Brasília e atuação em trauma, consultório e reabilitação", "Professora de pós-graduação em Medicina do Esporte, palestrante e produtora de conteúdo científico"]);

  replaceHtml(".path-heading h2", "Uma jornada clara, passo a passo.");
  replaceText(".path-heading > p:not(.eyebrow)", ["Da primeira conversa ao acompanhamento, a família sabe onde está e o que vem a seguir."]);
  replaceText(".path li p", [
    "A equipe orienta sobre horários, modalidade e o que levar para a consulta.",
    "Começamos pela história, pelos sinais percebidos e pelas dúvidas de quem cuida.",
    "O exame físico observa movimento, crescimento e o que muda na rotina da criança.",
    "Se necessários, os exames ajudam a complementar a avaliação com propósito.",
    "As possibilidades são explicadas com clareza para uma escolha segura e compartilhada.",
    "Orientações, evolução e retorno: a família segue sabendo qual é o próximo passo."
  ]);
  replaceText(".journey-message", ["Cada etapa é explicada para que a família possa decidir com segurança."]);
  replaceText(".appointment-illustration > p", ["Do primeiro contato ao retorno, uma experiência pensada para a criança e sua família."]);
  replaceHtml(".appointment h2", "Vamos cuidar desse próximo passo?");
  replaceText(".appointment-copy > p:not(.eyebrow)", ["Fale com a equipe pelo WhatsApp para verificar horários, modalidade de atendimento e o que levar para a consulta. A partir daí, a família recebe orientação clara em cada etapa."]);
  replaceHtml(".service-details p:first-child", "<b>Presencial</b><br>Brasília/DF: Hospital Brasília, Asa Norte e Planaltina.");
  replaceHtml(".service-details p:last-child", "<b>Telemedicina</b><br>Atendimento para pacientes de todo o Brasil, conforme normas vigentes.");
  replaceText(".footer-brand p", ["Do crescimento infantil à vida adulta, com escuta, clareza e decisões em família."]);
}
