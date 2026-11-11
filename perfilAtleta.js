document.addEventListener("DOMContentLoaded", function () {
  const statCards = document.querySelectorAll(".stat-card");

  statCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.stopPropagation();

      statCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("open");
        }
      });

      this.classList.toggle("open");
    });
  });

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
