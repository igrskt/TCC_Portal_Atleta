/* =========================================================
   PORTAL ATLETA — MENU DE PERFIL REUTILIZÁVEL
   ========================================================= */

(function () {
  "use strict";

  /* ============ CHAVES DO STORAGE ============ */
  var KEY_NOME = "portalAtletaNome";
  var KEY_EMAIL = "portalAtletaEmail";
  var KEY_LOGADO = "portalAtletaLogado";

  /* ============ HELPERS DE ESTADO ============ */
  function estaLogado() {
    // Primeira visita = assume logado (para manter o visual do avatar)
    // Só vira "false" quando o usuário clica em Sair
    return localStorage.getItem(KEY_LOGADO) !== "false";
  }

  function definirLogado(valor) {
    localStorage.setItem(KEY_LOGADO, valor ? "true" : "false");
  }

  /* ============ CONFIG ============ */
  var CONFIG = {
    nome: localStorage.getItem(KEY_NOME) || "Visitante",
    email: localStorage.getItem(KEY_EMAIL) || "sem-email@portal.com",
    paginaSair: "index.html",
    paginaInicial: "index.html",
  };

  /* ============ REDIRECT + CAPTURA DO FORM ============ */
  document.addEventListener(
    "submit",
    function (e) {
      var form = e.target;
      if (!form || form.nodeName !== "FORM") return;
      if (!form.querySelector('input[type="password"]')) return;

      e.preventDefault();
      e.stopPropagation();

      var campoNome = form.querySelector(
        'input[name="username"], input[name="nome"], input[name="nomeEmpresa"]'
      );
      var campoEmail = form.querySelector('input[name="email"]');

      var nome = campoNome ? campoNome.value.trim() : "";
      var email = campoEmail ? campoEmail.value.trim() : "";

      if (nome) localStorage.setItem(KEY_NOME, nome);
      if (email) localStorage.setItem(KEY_EMAIL, email);

      definirLogado(true); // <-- MARCA COMO LOGADO

      window.location.href = CONFIG.paginaInicial;
    },
    true
  );

  /* ============ AVATAR PADRÃO ============ */
  var AVATAR_SVG =
    'url("data:image/svg+xml;utf8,' +
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" +
    "<rect width='100' height='100' fill='%23570505'/>" +
    "<circle cx='50' cy='36' r='17' fill='%23ffffff'/>" +
    "<rect x='20' y='60' width='60' height='40' rx='20' fill='%23ffffff'/>" +
    '</svg>")';

  /* ============ CSS ============ */
  var CSS = [
    ".perfil-wrapper{position:relative;display:flex;align-items:center;margin-left:18px;z-index:60;}",
    "header .perfil-wrapper .perfil-avatar-btn{width:48px !important;height:48px !important;padding:0 !important;border-radius:50% !important;border:2px solid #fff !important;background:transparent !important;letter-spacing:normal !important;cursor:pointer;overflow:hidden;display:flex !important;align-items:center;justify-content:center;transition:transform .2s, box-shadow .2s;font-family:inherit;}",
    "header .perfil-wrapper .perfil-avatar-btn:hover{background:transparent !important;transform:scale(1.05);box-shadow:0 0 0 4px rgba(255,255,255,.25);}",
    ".perfil-avatar-img{width:100%;height:100%;border-radius:50%;background-image:" +
      AVATAR_SVG +
      ";background-size:cover;background-position:center;background-repeat:no-repeat;}",
    '.perfil-dropdown{position:absolute;top:calc(100% + 14px);right:0;width:340px;max-width:calc(100vw - 24px);background:#202124;color:#e8eaed;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.45);overflow:hidden;z-index:9999;font-family:"Poppins", sans-serif;animation:perfilFadeIn .18s ease;}',
    ".perfil-dropdown[hidden]{display:none;}",
    "@keyframes perfilFadeIn{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}",
    ".perfil-card{display:flex;flex-direction:column;align-items:center;padding:20px 16px 16px;text-align:center;}",
    ".perfil-card .perfil-pic{width:72px;height:72px;border-radius:50%;overflow:hidden;border:3px solid #570505;margin-bottom:12px;}",
    ".perfil-card .perfil-name{font-size:16px;font-weight:600;color:#fff;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
    ".perfil-card .perfil-email{font-size:13px;color:#b8b8b8;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px;}",
    ".perfil-divider{height:1px;background:rgba(255,255,255,.12);}",
    ".perfil-item{display:flex;align-items:center;gap:14px;padding:12px 20px;color:#e8eaed;text-decoration:none;font-size:14px;font-family:inherit;cursor:pointer;background:none;border:none;width:100%;text-align:left;transition:background .2s;}",
    ".perfil-item:hover,.perfil-item:focus-visible{background:rgba(255,255,255,.08);}",
    ".perfil-item .perfil-icon{width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}",
    ".perfil-item .perfil-icon svg{width:100%;height:100%;}",
    ".perfil-item .perfil-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
    ".perfil-item .perfil-chev{width:16px;height:16px;opacity:.75;display:flex;align-items:center;justify-content:center;}",
    ".perfil-item .perfil-chev svg{width:100%;height:100%;}",
    "@media (max-width:768px){header .perfil-wrapper .perfil-avatar-btn{width:42px !important;height:42px !important;}.perfil-wrapper{margin-left:0;}.perfil-dropdown{width:min(92vw,340px);}}",
    "@media (max-width:480px){.perfil-dropdown{width:90vw;}.perfil-card .perfil-name{font-size:15px;}.perfil-card .perfil-email{font-size:12px;}.perfil-item{font-size:13px;padding:11px 16px;}}",
    "@media (min-width:1440px){header .perfil-wrapper .perfil-avatar-btn{width:56px !important;height:56px !important;}.perfil-dropdown{width:380px;}.perfil-card .perfil-pic{width:84px;height:84px;}.perfil-card .perfil-name{font-size:18px;}.perfil-card .perfil-email{font-size:14px;}.perfil-item{font-size:16px;padding:14px 22px;}}",
    "@media (min-width:2560px){header .perfil-wrapper .perfil-avatar-btn{width:70px !important;height:70px !important;}.perfil-dropdown{width:480px;}.perfil-card .perfil-pic{width:100px;height:100px;}.perfil-card .perfil-name{font-size:22px;}.perfil-card .perfil-email{font-size:17px;}.perfil-item{font-size:20px;padding:18px 26px;}.perfil-item .perfil-icon{width:28px;height:28px;}}",
  ].join("");

  function injetarCSS() {
    if (document.getElementById("perfil-estilos")) return;
    var s = document.createElement("style");
    s.id = "perfil-estilos";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ============ HTML DO COMPONENTE ============ */
  function criarComponente() {
    var wrapper = document.createElement("div");
    wrapper.className = "perfil-wrapper";
    wrapper.innerHTML =
      '<button class="perfil-avatar-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="perfilDropdown" aria-label="Abrir menu do perfil">' +
      '<div class="perfil-avatar-img"></div>' +
      "</button>" +
      '<div class="perfil-dropdown" id="perfilDropdown" role="menu" hidden>' +
      '<div class="perfil-card">' +
      '<div class="perfil-pic"><div class="perfil-avatar-img"></div></div>' +
      '<div class="perfil-name">' +
      CONFIG.nome +
      "</div>" +
      '<div class="perfil-email">' +
      CONFIG.email +
      "</div>" +
      "</div>" +
      '<div class="perfil-divider"></div>' +
      '<a href="#" class="perfil-item" role="menuitem">' +
      '<span class="perfil-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M6.5 19a6 6 0 0 1 11 0"/></svg></span>' +
      '<span class="perfil-label">Conta do Portal Atleta</span>' +
      "</a>" +
      '<a href="#" class="perfil-item" role="menuitem">' +
      '<span class="perfil-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15 19a5 5 0 0 1 6-4.9"/></svg></span>' +
      '<span class="perfil-label">Mudar de conta</span>' +
      '<span class="perfil-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>' +
      "</a>" +
      '<button type="button" class="perfil-item" role="menuitem" data-perfil-action="sair">' +
      '<span class="perfil-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg></span>' +
      '<span class="perfil-label">Sair</span>' +
      "</button>" +
      '<div class="perfil-divider"></div>' +
      '<a href="#" class="perfil-item" role="menuitem">' +
      '<span class="perfil-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M15 9a3 3 0 0 0-3-3h-1.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H12a3 3 0 0 1-3-3"/></svg></span>' +
      '<span class="perfil-label">Compras e assinaturas</span>' +
      "</a>" +
      "</div>";

    return wrapper;
  }

  /* ============ COMPORTAMENTO ============ */
  function ativarComportamento(wrapper) {
    var btn = wrapper.querySelector(".perfil-avatar-btn");
    var dropdown = wrapper.querySelector(".perfil-dropdown");
    var btnSair = wrapper.querySelector('[data-perfil-action="sair"]');

    function abrir() {
      dropdown.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    }
    function fechar() {
      dropdown.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (dropdown.hasAttribute("hidden")) {
        abrir();
      } else {
        fechar();
      }
    });

    document.addEventListener("click", function (e) {
      if (dropdown.hasAttribute("hidden")) return;
      if (dropdown.contains(e.target)) return;
      if (btn.contains(e.target)) return;
      fechar();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !dropdown.hasAttribute("hidden")) {
        fechar();
        btn.focus();
      }
    });

    btnSair.addEventListener("click", function () {
      fechar();

      // 1) Marca como DESLOGADO
      definirLogado(false);

      // 2) Limpa os dados do usuário
      localStorage.removeItem(KEY_NOME);
      localStorage.removeItem(KEY_EMAIL);

      // 3) Recarrega a página inicial — agora iniciar() verá
      //    estaLogado() === false e NÃO vai injetar o avatar,
      //    deixando o .bnt-login original aparecer.
      window.location.href = CONFIG.paginaSair;
    });
  }

  /* ============ INICIALIZAÇÃO ============ */
  function iniciar() {
    var header = document.querySelector("header");
    if (!header) return;
    if (header.querySelector(".perfil-wrapper")) return;

    var loginAntigo = header.querySelector(".bnt-login");

    if (estaLogado()) {
      // ESTADO LOGADO: esconde login antigo e monta avatar
      if (loginAntigo) loginAntigo.style.display = "none";
      var wrapper = criarComponente();
      header.appendChild(wrapper);
      ativarComportamento(wrapper);
    } else {
      // ESTADO DESLOGADO: garante que o login antigo está visível
      if (loginAntigo) loginAntigo.style.display = "";
    }
  }

  injetarCSS();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
