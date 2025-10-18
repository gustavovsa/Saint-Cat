// Onde trocar os textos das sinopses e imagens

import { img } from "framer-motion/client";

const books = [
  {
    id: "tsf",
    title: "The Storm Fall",
    cover: "/assets/The Storm Fall.png", // substitua pela sua imagem
    theme: "rain",
    short:
      "A tempestade que mudou o mundo. Uma jornada de sobrevivência e segredos.",
    full: `"E viu-se no céu um grande sinal: uma tempestade caiu sobre a Terra, e com ela vieram os ecos do princípio e do fim."

Seis jovens foram levados além do tempo, forçados a enfrentar forças que desafiam a própria criação. Para impedir a ascensão de algo que não deveria existir, precisam reunir os Fragmentos da Joia do Éden, um artefato cujos pedaços se espalharam pelo tempo.

Mas cada batalha travada, cada inimigo derrotado, é apenas um prenúncio do que realmente se aproxima. Os anjos observam. Os demônios se preparam. O mundo se move rumo a um destino inevitável. A tempestade caiu. E aquilo que dorme… está despertando.`,

links: {
      prologo: '/downloads/The Storm Fall (Prólogo).pdf',
      ebook: 'https://www.amazon.com.br/Storm-Fall-Gustavo-V-ebook/dp/B0F4Q9Y4RR/ref=tmm_kin_swatch_0',
      fisico: 'https://www.amazon.com.br/Storm-Fall-Portuguese-Gustavo-V/dp/6501414393/ref=tmm_pap_swatch_0'
    },

    characters: [
      { name: "Gustavo", desc: "Gustavo conhece muito bem a dor da perda. A morte o acompanhou durante toda a sua vida, junto com o sofrimento e culpa. Por isso ele não se importa nenhum um pouco em se sacrificar para poder manter o bem daqueles que o cercam. Ficar sozinho de novo pode ser o maior medo de alguém que tanto já perdeu.", video: "/assets/Gustavo_0008_eu.mp4"},
      { name: "Ana", desc: "Ana já teve que lidar com muita pressão, e por boa parte de sua vida, carregou uma certa tristeza que nunca ia embora. Ela chegou muito perto de perder sua fé, mas algo a fez ter vontade de lutar e não desistir. E agora, mais do que nunca, Ana tem que ser forte para lidar com os problemas que estão por vir.", video: "/assets/ana.png" },
      { name: "Hudson", desc: "Ele aprendeu a usar o Localizador muito rápido, o que mostra uma inteligência alta, pois não havia quem o ensinasse. Ele quase sempre será o primeiro a descobrir algo importante, o que o torna uma peça fundamental na vitória de todos.", video: "/assets/H.png" },
      { name: "Carol", desc: "Carol tenta ser melhor toda vez, não voltar a cometer os mesmo erros, por mais que ela escorregue no meio do caminho. Seus traumas e passado jamais a deixarão, assim como suas ações. Mas ela ainda está disposta a lutar para melhorar. Ou só para não perder quem ama novamente.", video: "/assets/carol.png" },
      { name: "Dayllon", desc: "Dayllon tem muitos traumas em seu passado, e sabe que não pode salvar todo mundo. Mas isso não o impede de continuar tentando, nem que ele tenha que se sacrificar para que isso aconteça. Pelo menos ele tem a esperança de que isso aconteça.", video: "/assets/dayllon.png" },
      { name: "Laura", desc: "E apesar de tudo, no fim, Laura tem um bom coração. Ela só tem medo de cometer ou ver os outros cometendo os mesmos erros que ela novamente. Por isso acaba sendo rígida, como forma de não deixar as coisas saírem do controle.", video: "/assets/laura.png" },
    ],
  },
  {
    id: "tm",
    title: "The Mystic",
    cover: "/assets/Capa TM.png",
    theme: "mystic",
    short: "Mistérios e antigas magias em um mundo à beira do esquecimento.",
    full: `No princípio, não havia tempo. Apenas sussurros entre as árvores e olhos ocultos no escuro. Ali, no lugar onde a Criação não ousa entrar, algo antigo desperta. Após o desaparecimento de seu pai, o detetive Jim McKenzie, o jovem Aidan mergulha em uma espiral de loucura, medo e revelações proibidas. Sozinho, em uma cidade cercada pela floresta mais assombrada do mundo, ele começa a descobrir segredos que jamais deveriam ser encontrados. Ecos de rituais falhos, criaturas que tomam formas humanas, olhos que observam nas sombras — tudo parece apontar para uma fenda na realidade: O Místico. Enquanto isso, Jim enfrenta um mal ancestral que se alimenta da sanidade dos homens e ressurge dos escombros da fé. Preso entre visões e pesadelos, ele luta contra o tempo, contra o silêncio e contra si mesmo.`,

    aviso: "Em breve",
    
    characters: [
      { name: "Jim", desc: "", img: "" },
      { name: "Aidan", desc: "", img: "" },
    ],
  },
];

export default books;