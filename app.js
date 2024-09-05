import spiderManVersions from "./data.js";

const submit = document.getElementById("search");
const btn = document.getElementById("btn-submit");
const inputText = document.querySelector(".input-text");
const characterContent = document.getElementsByClassName("cover-spider")[0];
const footer = document.querySelector("footer");

// Função para atualizar o estado do botão
function updateBtn() {
  btn.disabled = submit.value.length < 3;
}

// Atualiza o botão ao carregar a página
updateBtn();

// Adiciona evento de input para atualizar o botão em tempo real
submit.addEventListener("input", updateBtn);

// Evento de submit do formulário
document
  .querySelector(".content-input")
  .addEventListener("submit", function (event) {
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
  coverSpider.setAttribute("id", `${version.name}`);
  coverSpider.innerHTML = `
        <img src="${version.cover}" alt="${version.name}">
        <h3>${version.name}</h3>
    `;
  characterContent.appendChild(coverSpider);
});
