let quantidade_jogadores = 6;
let dinheiro_jogadores = [ 0, 0, 0, 0, 0, 0 ];

let jogador_paga = null;
let jogador_recebe = null;

console.log(quantidade_jogadores);
console.log(dinheiro_jogadores);

const cam = document.getElementById("cam");

const QR_SCANNER = new QrScanner(cam, result => console.log('decoded qr code:', result));
// QR_SCANNER.start();