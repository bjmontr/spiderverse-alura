import spiderManVersions from "./data.js";

const submit = document.getElementById("search");
const btn = document.getElementById("btn-submit");
const inputText = document.querySelector(".input-text");
const characterContent = document.getElementsByClassName("cover-spider")[0];
const main = document.getElementsByTagName("main")[0]; // Corrigido para selecionar o elemento main corretamente
const footer = document.querySelector("footer");

// Cria e adiciona o modal ao DOM uma vez
const modal = document.createElement("section");
modal.classList.add("modal-spider");
modal.setAttribute("id", "modal-spider");
modal.style.display = 'none'; // Inicialmente oculto
main.appendChild(modal);

const closeBtn = document.createElement('span');
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';
modal.appendChild(closeBtn);

// Função para atualizar o estado do botão
function updateBtn() {
  btn.disabled = submit.value.length < 3;
}

// Atualiza o botão ao carregar a página
updateBtn();

// Adiciona evento de input para atualizar o botão em tempo real
submit.addEventListener("input", updateBtn);

// Evento de submit do formulário
document.querySelector(".content-input").addEventListener("submit", function (event) {
  event.preventDefault();

  const searchValue = inputText.value.toLowerCase();
  console.log("Valor enviado:", searchValue);

  const foundItems = spiderManVersions.filter((spider) =>
    spider.name.toLowerCase().includes(searchValue)
  );

  const characterDivs = document.querySelectorAll(".character-content");

  if (foundItems.length > 0) {
    characterDivs.forEach((div) => {
      const spiderName = div.querySelector("h3").textContent.toLowerCase();
      const isMatch = foundItems.some(
        (spider) => spider.name.toLowerCase() === spiderName
      );
      div.style.display = isMatch ? "block" : "none";
    });
    footer.style.position = "relative";
  } else {
    console.log("Nenhum personagem encontrado");
    characterDivs.forEach((div) => {
      div.style.display = "none";
    });
    footer.style.position = "fixed";
  }

  // Limpa o campo de texto
  inputText.value = "";
  updateBtn(); // Atualiza o botão após o envio
});

// Cria os elementos de personagem e adiciona ao DOM
spiderManVersions.forEach((version) => {
  const coverSpider = document.createElement("div");
  coverSpider.classList.add("character-content");
  coverSpider.setAttribute("id", version.name);
  coverSpider.innerHTML = `
    <img src="${version.cover}" alt="${version.name}">
    <h3>${version.name}</h3>
  `;
  coverSpider.addEventListener('click', function() {
    // Atualiza o conteúdo do modal
    modal.innerHTML = `
      <span class="close-btn">&times;</span>
      <img src="${version.fullPortrait}" alt="${version.name}">
      <div class="bio-content">
        <h2>${version.name}</h2>
        <div class="description">
          <h3>INFORMAÇÕES</h3>
          <div class="inf">
            <p>Nome Completo</p>
            <h4>${version.fullname}</h4>
          </div>
          <div class="inf">
            <p>Terra</p>
            <h4>${version.universe}</h4>
          </div>
          <div class="inf">
            <h4>Descrição</h4>
            <p>${version.description}</p>
          </div>
        </div>
        <h3>PRIMEIRA APARIÇÃO</h3>
        <img class="cover-description" src="${version.cover}" alt="${version.name}">
      </div>
    `;

    // Adiciona o botão de fechar ao modal
    modal.appendChild(closeBtn);

    // Exibe o modal
    modal.style.display = 'flex';
  });

  characterContent.appendChild(coverSpider);
});

// Configura o botão de fechar e a funcionalidade de clicar fora do modal
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
