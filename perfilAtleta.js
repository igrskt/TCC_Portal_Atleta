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


