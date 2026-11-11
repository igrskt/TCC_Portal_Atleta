(function () {
  "use strict";

  /* ============ ÍNDICE DE PÁGINAS ============ */
  var INDEX = [
    /* ---- Informativos (história) ---- */
    {
      titulo: "História do Skate",
      tipo: "Informativo",
      url: "InformativoSkate.html",
      termos: [
        "skate",
        "sk8",
        "street",
        "park",
        "vertical",
        "historia do skate",
      ],
    },
    {
      titulo: "História do BMX",
      tipo: "Informativo",
      url: "InformativoBMX.html",
      termos: [
        "bmx",
        "bicicross",
        "bike",
        "race",
        "freestyle",
        "dirt",
        "historia do bmx",
      ],
    },
    {
      titulo: "História do Handebol de Areia",
      tipo: "Informativo",
      url: "informativoHande.html",
      termos: [
        "handebol",
        "handebol de areia",
        "hande",
        "hand",
        "beach handball",
      ],
    },
    {
      titulo: "História do Vôlei de Areia",
      tipo: "Informativo",
      url: "informativoVolei.html",
      termos: [
        "volei",
        "vôlei",
        "volei de areia",
        "vôlei de areia",
        "vo",
        "beach volleyball",
      ],
    },

    
    {
      titulo: "Atletas de Skate",
      tipo: "Lista de Atletas",
      url: "PaginaAtletaSkate.html",
      termos: ["atletas de skate", "atletas skate"],
    },
    {
      titulo: "Atletas de BMX",
      tipo: "Lista de Atletas",
      url: "PaginaAtletaBMX.html",
      termos: ["atletas de bmx", "atletas bmx"],
    },
    {
      titulo: "Atletas de Handebol de Areia",
      tipo: "Lista de Atletas",
      url: "PaginaAtletaHande.html",
      termos: ["atletas de handebol", "atletas handebol"],
    },
    {
      titulo: "Atletas de Vôlei de Areia",
      tipo: "Lista de Atletas",
      url: "PaginaAtletaVolei.html",
      termos: ["atletas de volei", "atletas volei"],
    },

   
    {
      titulo: "Pedro Henrique",
      tipo: "Atleta de Skate",
      url: "perfilAtletaSkate1.html",
      termos: ["pedro henrique", "skate", "street"],
    },
    {
      titulo: "Gabriel Souza",
      tipo: "Atleta de Skate",
      url: "perfilAtletaSkate2.html",
      termos: ["gabriel souza", "skate", "park"],
    },
    {
      titulo: "Marina Lopes",
      tipo: "Atleta de Skate",
      url: "perfilAtletaSkate3.html",
      termos: ["marina lopes", "skate", "vertical"],
    },
    {
      titulo: "Vinícius Ramos",
      tipo: "Atleta de Skate",
      url: "perfilAtletaSkate4.html",
      termos: ["vinicius ramos", "vinícius ramos", "skate", "street"],
    },

    
    {
      titulo: "Lucas Almeida",
      tipo: "Atleta de BMX",
      url: "perfilAtletaBMX1.html",
      termos: ["lucas almeida", "bmx", "race"],
    },
    {
      titulo: "Rafael Nogueira",
      tipo: "Atleta de BMX",
      url: "perfilAtletaBMX2.html",
      termos: ["rafael nogueira", "bmx", "freestyle"],
    },
    {
      titulo: "Bruno Carvalho",
      tipo: "Atleta de BMX",
      url: "perfilAtletaBMX3.html",
      termos: ["bruno carvalho", "bmx", "race"],
    },
    {
      titulo: "Diego Martins",
      tipo: "Atleta de BMX",
      url: "perfilAtletaBMX4.html",
      termos: ["diego martins", "bmx", "dirt"],
    },

   
    {
      titulo: "Thiago Ferreira",
      tipo: "Atleta de Handebol de Areia",
      url: "perfilAtletaHande1.html",
      termos: ["thiago ferreira", "handebol", "hande"],
    },
    {
      titulo: "Juliana Rocha",
      tipo: "Atleta de Handebol de Areia",
      url: "perfilAtletaHande2.html",
      termos: ["juliana rocha", "handebol", "hande"],
    },
    {
      titulo: "Camila Duarte",
      tipo: "Atleta de Handebol de Areia",
      url: "perfilAtletaHande3.html",
      termos: ["camila duarte", "handebol", "hande"],
    },
    {
      titulo: "Marcos Antunes",
      tipo: "Atleta de Handebol de Areia",
      url: "perfilAtletaHande4.html",
      termos: ["marcos antunes", "handebol", "hande"],
    },

    
    {
      titulo: "André Lima",
      tipo: "Atleta de Vôlei de Areia",
      url: "perfilAtletaVolei1.html",
      termos: ["andre lima", "andré lima", "volei", "vôlei"],
    },
    {
      titulo: "Beatriz Alves",
      tipo: "Atleta de Vôlei de Areia",
      url: "perfilAtletaVolei2.html",
      termos: ["beatriz alves", "volei", "vôlei"],
    },
    {
      titulo: "Carlos Eduardo",
      tipo: "Atleta de Vôlei de Areia",
      url: "perfilAtletaVolei3.html",
      termos: ["carlos eduardo", "volei", "vôlei"],
    },
    {
      titulo: "Larissa Prado",
      tipo: "Atleta de Vôlei de Areia",
      url: "perfilAtletaVolei4.html",
      termos: ["larissa prado", "volei", "vôlei"],
    },
  ];

  function normalizar(txt) {
    return (txt || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  
  var CSS = [
    ".search-box{position:relative;}",
    ".busca-dropdown{",
    "position:absolute;top:calc(100% + 6px);left:0;",
    "width:max(100%,320px);max-width:calc(100vw - 24px);",
    "max-height:400px;overflow-y:auto;",
    "background:#fff;border:1px solid #e0e0e0;border-radius:10px;",
    "box-shadow:0 12px 32px rgba(0,0,0,.20);",
    "z-index:9999;display:none;font-family:sans-serif;",
    "}",
    ".busca-dropdown.aberto{display:block;}",
    ".busca-item{",
    "display:flex;justify-content:space-between;align-items:center;",
    "gap:12px;padding:11px 14px;cursor:pointer;",
    "border-bottom:1px solid #f0f0f0;color:#202020;text-decoration:none;",
    "font-size:14px;transition:background .15s;",
    "}",
    ".busca-item:last-child{border-bottom:none;}",
    ".busca-item:hover,.busca-item.ativo{background:#f7f7f9;}",
    ".busca-item.ativo{box-shadow:inset 3px 0 0 #570505;}",
    ".busca-item .busca-titulo{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
    ".busca-item .busca-tipo{",
    "font-size:11px;color:#570505;background:rgba(87,5,5,.08);",
    "padding:3px 9px;border-radius:12px;white-space:nowrap;letter-spacing:.3px;",
    "}",
    ".busca-vazio{padding:16px 14px;text-align:center;color:#666;font-size:14px;}",
    "@media (max-width:480px){",
    ".busca-dropdown{min-width:0;width:100%;}",
    ".busca-item{font-size:13px;padding:10px 12px;}",
    ".busca-item .busca-tipo{font-size:10px;padding:2px 7px;}",
    "}",
  ].join("");

  function injetarCSS() {
    if (document.getElementById("busca-estilos")) return;
    var s = document.createElement("style");
    s.id = "busca-estilos";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ============ MOTOR DE BUSCA ============ */
  function buscar(query) {
    var q = normalizar(query).trim();
    if (!q) return [];
    var achados = [];
    for (var i = 0; i < INDEX.length; i++) {
      var it = INDEX[i];
      var alvo =
        normalizar(it.titulo) +
        " " +
        normalizar(it.tipo) +
        " " +
        it.termos.map(normalizar).join(" ");
      if (alvo.indexOf(q) !== -1) achados.push(it);
    }
    return achados;
  }

  /* ============ UI ============ */
  function iniciar() {
    var input = document.getElementById("pesquisa");
    if (!input) return;
    var wrapper = input.closest(".search-box");
    if (!wrapper) return;
    if (wrapper.querySelector(".busca-dropdown")) return;

    var dropdown = document.createElement("div");
    dropdown.className = "busca-dropdown";
    dropdown.setAttribute("role", "listbox");
    wrapper.appendChild(dropdown);

    var ativoIdx = -1;

    function itensVisiveis() {
      return dropdown.querySelectorAll(".busca-item");
    }
    function abrir() {
      dropdown.classList.add("aberto");
    }
    function fechar() {
      dropdown.classList.remove("aberto");
      ativoIdx = -1;
    }

    function destacar(idx) {
      var itens = itensVisiveis();
      for (var k = 0; k < itens.length; k++) itens[k].classList.remove("ativo");
      if (idx >= 0 && idx < itens.length) {
        itens[idx].classList.add("ativo");
        ativoIdx = idx;
        itens[idx].scrollIntoView({ block: "nearest" });
      }
    }

    function render(resultados) {
      dropdown.innerHTML = "";
      ativoIdx = -1;

      if (!input.value.trim()) {
        fechar();
        return;
      }

      if (resultados.length === 0) {
        var v = document.createElement("div");
        v.className = "busca-vazio";
        v.textContent = "Nenhum resultado encontrado";
        dropdown.appendChild(v);
        abrir();
        return;
      }

      resultados.forEach(function (item, i) {
        var a = document.createElement("a");
        a.className = "busca-item";
        a.href = item.url;
        a.setAttribute("role", "option");

        var t = document.createElement("span");
        t.className = "busca-titulo";
        t.textContent = item.titulo;

        var g = document.createElement("span");
        g.className = "busca-tipo";
        g.textContent = item.tipo;

        a.appendChild(t);
        a.appendChild(g);

        a.addEventListener("mouseenter", function () {
          destacar(i);
        });
        a.addEventListener("click", function () {
          fechar();
        });

        dropdown.appendChild(a);
      });

      abrir();
    }

    /* ============ EVENTOS ============ */
    input.addEventListener("input", function () {
      render(buscar(input.value));
    });

    input.addEventListener("focus", function () {
      if (input.value.trim()) render(buscar(input.value));
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!dropdown.classList.contains("aberto")) {
          render(buscar(input.value));
          return;
        }
        var listaD = itensVisiveis();
        if (listaD.length === 0) return;
        destacar(Math.min(ativoIdx + 1, listaD.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!dropdown.classList.contains("aberto")) return;
        var listaU = itensVisiveis();
        if (listaU.length === 0) return;
        destacar(Math.max(ativoIdx - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (!dropdown.classList.contains("aberto")) {
          render(buscar(input.value));
        }
        var listaE = itensVisiveis();
        if (listaE.length === 0) return;
        var alvo =
          ativoIdx >= 0 && listaE[ativoIdx] ? listaE[ativoIdx] : listaE[0];
        window.location.href = alvo.href;
      } else if (e.key === "Escape") {
        fechar();
      }
    });

    document.addEventListener("click", function (e) {
      if (wrapper.contains(e.target)) return;
      fechar();
    });
  }

  /* ============ BOOT ============ */
  injetarCSS();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
