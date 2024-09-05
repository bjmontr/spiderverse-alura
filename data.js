const spiderManVersions = [
  {
    name: "peter parker",
    firstAppearance: "Amazing Fantasy #15 (1962)",
    description:
      "O Homem-Aranha original, um jovem fotógrafo que ganha poderes aracnídeos após ser mordido por uma aranha radioativa.",
    cover: "https://m.media-amazon.com/images/I/51ylofh3QmL._SY580_.jpg",
  },
  {
    name: "Miles Morales",
    firstAppearance: "Ultimate Fallout #4 (2011)",
    description:
      "Um jovem afro-latino que assume o manto do Homem-Aranha no universo Ultimate após a morte de Peter Parker.",
    cover: "https://m.media-amazon.com/images/I/51L5qDky1kL._SY580_.jpg",
  },
  {
    name: "Spider-Gwen",
    firstAppearance: "Edge of Spider-Verse #2 (2014)",
    description:
      "Gwen Stacy, no universo alternativo onde ela foi mordida por uma aranha radioativa, tornando-se a Spider-Woman.",
    cover: "https://m.media-amazon.com/images/I/51jP2NW8P5L.jpg",
  },
  {
    name: "Spider-Man 2099",
    firstAppearance: "The Amazing Spider-Man #365 (1992)",
    description:
      "Um geneticista do ano 2099 que cria uma nova identidade de Homem-Aranha com poderes aprimorados.",
    cover: "https://m.media-amazon.com/images/I/517X2UHJ2hL.jpg",
  },
  {
    name: "Scarlet Spider",
    firstAppearance: "The Amazing Spider-Man #149 (1975)",
    description:
      "Um clone de Peter Parker que assume a identidade de Scarlet Spider antes de se tornar o Homem-Aranha Ben Reilly.",
    cover:
      "https://image.keycollectorcomics.com/media/amazing_spider-man_149.jpg",
  },
  {
    name: "Spider-Man Noir",
    firstAppearance: "Spider-Man: Noir #1 (2009)",
    description:
      "Uma versão do Homem-Aranha ambientada na década de 1930, com uma estética noir e métodos mais sombrios.",
    cover: "https://m.media-amazon.com/images/I/51LQIWq35tL.jpg",
  },
  {
    name: "SP//dr",
    firstAppearance: "Edge of Spider-Verse #5 (2014)",
    description:
      "Uma jovem pilotando um mecha bioprostético chamado SP//dr, em um universo futurista.",
    cover: "https://m.media-amazon.com/images/I/51Bn81LtJqL.jpg",
  },
  {
    name: "Spider-Ham",
    firstAppearance:
      "Marvel Tails Starring Peter Porker, the Spectacular Spider-Ham #1 (1983)",
    description:
      "Uma versão cômica do Homem-Aranha como um porco antropomórfico.",
    cover: "https://m.media-amazon.com/images/I/61mmcj6YScL._SY780_.jpg",
  },
  {
    name: "Spider-Man 2211",
    firstAppearance: "The Superior Spider-Man #1 (2013)",
    description:
      "Uma versão do Homem-Aranha do futuro distante, com habilidades e tecnologia avançadas.",
    cover: "https://m.media-amazon.com/images/I/61BcOUDMHiL.jpg",
  },
  {
    name: "Cindy Moon",
    firstAppearance: "The Amazing Spider-Man vol. 3 #1 (2014)",
    description:
      "Uma colega de Peter Parker que ganha poderes semelhantes aos do Homem-Aranha após ser mordida pela mesma aranha.",
    cover: "https://m.media-amazon.com/images/I/616zBw1q1IL.jpg",
  },
  {
    name: "Spider-UK",
    firstAppearance: "Spider-Men II #1 (2017)",
    description:
      "Um membro da Young Masters do Reino Unido e parte do multiverso de Homens-Aranha.",
    cover: "https://m.media-amazon.com/images/I/51pACYUUoyL.jpg",
  },
  {
    name: "Spider-Man India",
    firstAppearance: "Spider-Man: India #1 (2004)",
    description:
      "Uma versão do Homem-Aranha ambientada na Índia, com elementos culturais locais incorporados.",
    cover: "https://m.media-amazon.com/images/I/51XKw7YRlfL.jpg",
  },
  {
    name: "Spider-Man 2211",
    firstAppearance: "Spider-Man 2099 Meets Spider-Man #1 (1995)",
    description:
      "Um agente da polícia temporal que utiliza um traje tecnologicamente avançado com múltiplos braços mecânicos. Ele protege as linhas do tempo e luta contra ameaças interdimensionais.",
    cover: "https://m.media-amazon.com/images/I/61CYb7vyI3L.jpg",
  },
  {
    name: "Spider-Man Unlimited",
    firstAppearance: "Spider-Man Unlimited #1 (1993)",
    description:
      "Eddie Brock, em uma versão alternativa, se torna o Homem-Aranha em uma realidade com um traje especial que possui habilidades extras, lutando contra ameaças interdimensionais.",
    cover: "https://m.media-amazon.com/images/I/61TCrx2LNkL.jpg",
  },
  {
    name: "Scarlet Spider",
    firstAppearance: "The Amazing Spider-Man #700 (2012)",
    description:
      "Um clone defeituoso de Peter Parker que assume a identidade de Scarlet Spider, buscando redenção.",
    cover: "https://m.media-amazon.com/images/I/61kS8AK2iYL._SY580_.jpg",
  },
  {
    name: "Spider-Man 1602",
    firstAppearance: "Spider-Man 1602 #1 (2004)",
    description:
      "Peter Parquagh é o Homem-Aranha em um universo ambientado no ano de 1602, com uma abordagem renascentista e influências históricas na sua origem e poderes.",
    cover: "https://m.media-amazon.com/images/I/61hWn60vZoL.jpg",
  },
  {
    name: "Spider-Woman",
    firstAppearance: "Marvel Spotlight #32 (1977)",
    description:
      "Embora não seja uma versão direta do Homem-Aranha, Jessica Drew compartilha algumas origens e poderes semelhantes.",
    cover: "https://m.media-amazon.com/images/I/61YXhRJmHtL.jpg",
  },
  {
    name: "Spider-Armor",
    firstAppearance: "The Amazing Spider-Man #1 (2015)",
    description:
      "Várias versões do Homem-Aranha que utilizam trajes tecnológicos avançados para aprimorar suas habilidades.",
    cover: "https://m.media-amazon.com/images/I/61OT83sTzTL._SY580_.jpg",
  },
  {
    name: "Spider-Man (Jakob P.)",
    firstAppearance: "Spider-Man: Reign #1 (2006)",
    description:
      "Jakob P. é um Homem-Aranha em uma realidade distópica e mais sombria, onde ele enfrenta um regime opressor em um futuro onde os heróis estão em baixa.",
    cover: "https://m.media-amazon.com/images/I/51LqGOy8ksL._SY780_.jpg",
  },
  {
    name: "Spider-Ma'am",
    firstAppearance: "What If? #105 (1978)",
    description:
      "Uma história alternativa onde a tia de Peter Parker, May Parker, torna-se o Homem-Aranha após a morte de Peter.",
    cover: "https://m.media-amazon.com/images/I/51gzsMFCIKL.jpg",
  },
  {
    name: "Spider-Man (Dinosaur)",
    firstAppearance: "Spider-Verse #1 (2014)",
    description:
      "Uma versão alternativa do Homem-Aranha em que Peter Parker é um dinossauro que possui habilidades aracnídeas, combinando poderes de aranha com características de dinossauro.",
    cover: "https://m.media-amazon.com/images/I/61S2MLuH4JL.jpg",
  },
];


export default spiderManVersions;