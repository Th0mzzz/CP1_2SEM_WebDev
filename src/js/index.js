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
const form = document.querySelector(".form-jogadora");
if (localStorage.getItem("jogadoras")) {
  jogadoras = JSON.parse(localStorage.getItem("jogadoras"));
} else {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

function renderizarJogadoras(list) {
  listaJogadoras.innerHTML = "";
  list.forEach((jogadora, index) => {
    const card = document.createElement("div");
    card.classList.add("card_jogadora");

    card.innerHTML = `

            <div class="btns">
                <button class="btn-icon" onClick="toggleFavorita(${index})">
                <i class="bi ${
                  jogadora.favorita ? "bi-heart-fill" : "bi-heart"
                }" ></i>
                </button>
                <button class="btn-icon" onClick="editarJogadora(${index})">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn-icon" onClick="deletarJogadora(${index})">
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

function editarJogadora(index) {
  const jogadora = jogadoras[index];
  document.getElementById("nome").value = jogadora.nome;
  document.getElementById("posicao").value = jogadora.posicao;
  document.getElementById("clube").value = jogadora.clube;
  document.getElementById("foto").value = jogadora.foto;
  document.getElementById("gols").value = parseInt(jogadora.gols);
  document.getElementById("assistencias").value = parseInt(
    jogadora.assistencias
  );
  document.getElementById("partidas").value = parseInt(jogadora.jogos);
  document.getElementById("index").value = index;
}

function adicionarOuAtualizarJogadora(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const posicao = document.getElementById("posicao").value;
  const clube = document.getElementById("clube").value;
  const foto = document.getElementById("foto").value;
  const gols = parseInt(document.getElementById("gols").value);
  const assistencias = parseInt(document.getElementById("assistencias").value);
  const jogos = parseInt(document.getElementById("partidas").value);
  const index = document.getElementById("index").value;

  if (index !== "") {
    jogadoras[index] = {
      nome,
      posicao,
      clube,
      foto,
      gols,
      assistencias,
      jogos,
      favorita: jogadoras[index].favorita,
    };
    alert("Jogadora atualizada com sucesso!");
  } else {
    jogadoras.push({
      nome,
      posicao,
      clube,
      foto,
      gols,
      assistencias,
      jogos,
      favorita: false,
    });
    alert("Jogadora adicionada com sucesso!");
  }

  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
  form.reset();
  document.getElementById("index").value = "";
  renderizarJogadoras(jogadoras);
}

function deletarJogadora(index) {
  if (confirm("Tem certeza que deseja deletar esta jogadora?")) {
    jogadoras.splice(index, 1);
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
    alert("Jogadora deletada com sucesso!");
    renderizarJogadoras(jogadoras);
  }
}

function toggleFavorita(index) {
  jogadoras[index].favorita = !jogadoras[index].favorita;
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
  renderizarJogadoras(jogadoras);
}

form.addEventListener("submit", (e) => {
  adicionarOuAtualizarJogadora(e);
});

renderizarJogadoras(jogadoras);

