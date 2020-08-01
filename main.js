//Classes
class Jogador {
    constructor(id, nome, dinheiro) {
        this.id = id;
        this.nome = nome;
        this.dinheiro = dinheiro;
    }
}

//Funções
function novo_jogo(){
    if(confirm("Isso apagará o jogo atual. Deseja iniciar um jogo novo?")){
        let quantidade_jogadores = escolher_quantidade_jogadores();
        let quantidade_dinheiro = escolher_quantidade_dinheiro();
        for(let i = 0;i < quantidade_jogadores; ++i){
            let nome = prompt(`Digite o nome do jogador ${i + 1}:`);
        }
    }
}

function escolher_quantidade_jogadores(){
    let quantidade = 0;
    while(true){
        quantidade = parseInt(prompt("Digite a quantidade de jogadores (1-6):"));
        if(!(isNaN(quantidade) || quantidade < 1 || quantidade > 6)){
            return quantidade;
        }
        alert("Digite um número entre 1 e 6.");
    }
}

function escolher_quantidade_dinheiro(){
    let quantidade = 0;
    while(true){
        quantidade = parseInt(prompt("Digite a quantidade inicial de dinheiro:"));
        if(!(isNaN(quantidade) || quantidade < 0)){
            return quantidade;
        }
        alert("Digite um número positivo.");
    }
}

function escanear_qr(){
    const QR_SCANNER = new QrScanner(cam, resultado => {
        QR_SCANNER.stop();
        return resultado;
    });
    QR_SCANNER.start();
}

function mostrar_dados(jogadores){
    let html = "";
    for(jogador of jogadores){
        html += `<div class="column is-2">` +
                    `<div class="box">` +
                        `<p><strong>${jogador.nome}</strong></p>` + 
                        `<p><i class="far fa-money-bill-alt"></i>&nbsp;${jogador.dinheiro},00</p>` +
                    `</div>` +
                `</div>`;
    }
    colunas_dados_div.innerHTML = html;
}

// Containers
let dados_div = document.getElementById("dados_div");
let botoes_div = document.getElementById("botoes_div");
let pagamento_div = document.getElementById("pagamento_div");

// Tabelas
let colunas_dados_div = document.getElementById("colunas_dados_div");

// Variáveis
let jogadores = [];

let j = new Jogador("1", "Igor", 1000);
let j2 = new Jogador("2", "Link", 2000);

jogadores.push(j);
jogadores.push(j2);

const cam = document.getElementById("cam");

mostrar_dados(jogadores);