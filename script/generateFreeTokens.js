const palavrasChave = [
    "BETEIROS", "BET", "TIP", "TIPS", "BETS", "TIPTERS", "APOSTADOR", "PALPITE", "JOGADA", "CERTEZA",
    "LUCRO", "GANHADOR", "PREMIADO", "ACUMULADA", "ODDS", "MESTRE", "PROGNOSTICO", "CAMPEAO", "SORTE",
    "JACKPOT", "BOLADA", "APOSTAMAX", "BETGOL", "PLACAR", "VITORIA", "ESPORTE", "COMPETICAO", "REI",
    "DINHEIRO", "BANCA", "LUCRATIVO", "MILHAO", "BILHETE", "PREVISAO", "ESTRATEGIA", "ANALISE", "BETWIN",
    "FUTEBOL", "BASQUETE", "TENIS", "CORRIDA", "GOLFE", "BOXE", "MMA", "ESPORTIVO", "CASSINO", "POKER",
    // ... Adicione mais palavras-chave conforme necessário
];

// Função para gerar um número aleatório
const gerarNumeroAleatorio = (max) => Math.floor(Math.random() * max);

// Função para gerar um cupom único
const gerarCupom = (indice) => {
    const palavra = palavrasChave[gerarNumeroAleatorio(palavrasChave.length)];
    const numeroAleatorio = gerarNumeroAleatorio(10000);
    return `${palavra}${numeroAleatorio}-APOSTAS-CHAT`;
};

// Criar um array de 100 índices e mapeá-lo para gerar os cupons
const cupons = Array.from({ length: 100 }, (_, indice) => gerarCupom(indice));

console.log(cupons);
