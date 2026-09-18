// ================= LÓGICA DO DROPDOWN NOS STAT-CARDS =================
document.addEventListener("DOMContentLoaded", function () {
  const statCards = document.querySelectorAll(".stat-card");

  statCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Impede que o clique feche o dropdown imediatamente
      e.stopPropagation();

      // Fecha outros dropdowns que estiverem abertos
      statCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("open");
        }
      });

      // Alterna a classe 'open' no card clicado
      this.classList.toggle("open");
    });
  });

  // Fecha dropdowns ao clicar em qualquer outro lugar da tela
  window.addEventListener("click", function () {
    statCards.forEach((card) => {
      card.classList.remove("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnContato = document.getElementById("btnContato");
  const toast = document.getElementById("toast");

  if (btnContato && toast) {
    btnContato.addEventListener("click", function () {
      const nomeAtleta = this.getAttribute("data-nome");
      toast.textContent = `Entrando em contato com ${nomeAtleta}...`;
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }
});
