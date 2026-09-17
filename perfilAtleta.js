document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnContato");
  const toast = document.getElementById("toast");
  if (!btn || !toast) return;

  let timer;
  btn.addEventListener("click", function () {
    toast.textContent = "Contato enviado para " + btn.dataset.nome + "!";
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2400);
  });
});
