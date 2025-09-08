let jogadoras = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

const listaJogadoras = document.querySelector("#lista_jogadoras");
if (localStorage.getItem("jogadoras")) {
  jogadoras = JSON.parse(localStorage.getItem("jogadoras"));
} else {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

function renderizarJogadoras() {
  listaJogadoras.innerHTML = "";
  jogadoras.forEach((jogadora) => {
    const card = document.createElement("div");
    card.classList.add("card_jogadora");

    card.innerHTML = `

            <div class="btns">
                <button class="btn-icon">
                <i class="bi ${
                  jogadora.favorita ? "bi-heart-fill" : "bi-heart"
                }"></i>
                </button>
                <button class="btn-icon">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn-icon">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
            <img src="${jogadora.foto}" alt="${jogadora.nome}" />
            <div class="card-body">
                <h3>${jogadora.nome}</h3>
                <p class="link" style="font-size: 18px">${jogadora.posicao}</p>
                <p class="link" style="color: #6e3b96">${jogadora.clube}</p>
                <div class="estatisticas">
                <div class="estatistica-item">
                    <p class="link">Gols</p>
                    <span>${jogadora.gols}</span>
                </div>
                <div class="estatistica-item">
                    <p class="link">Assistência</p>
                    <span>${jogadora.assistencias}</span>
                </div>
                <div class="estatistica-item">
                    <p class="link">Partidas</p>
                    <span>${jogadora.jogos}</span>
                </div>
                </div>
            </div>
        
            `;

    listaJogadoras.appendChild(card);
  });
}

renderizarJogadoras();  
