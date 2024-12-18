// Variaveis e Const do código
let jogo;
jogo = 1;
// jogoNormalMain();
let jogador = [1, 'X', 'O', '#f00', '#00f'];
let celula;
let round = 0;

linhaGanhar = new Linha();  

const verJogar = document.getElementsByClassName('playerIdent');


const jogoNormal = document.getElementById('normal');
const jogoTriangular = document.getElementById('triangular');

const finalStatus = document.getElementById('status');
const gameStatus = document.querySelector('#status h1');
// const linha = document.geteE('linhaGanhar');
const rejogarJogo = document.getElementById('replay');

rejogarJogo.addEventListener('click', replay);

// Funções globais
function getJogo(string) {
    let jogo;
    if (string == 'normal') {
        jogo = document.querySelector('#normal jogo');
    } 
    else if (string == 'triangular') {
        jogo = document.querySelector('#triangular jogo');
    }
    else if (string == 'super') {
        jogo = document.querySelector('#super jogo');
    }
    return jogo
}

function clearBoard(string) {
    let jogo = getJogo(string);
    round = 0;

    let crionca = jogo.children;
    for (i=0;  i<crionca.length  ;i++) {
        crionca[i].textContent = '';
    }
}

function statusToggle(toggle) {
        if (toggle) {
            finalStatus.style.display = 'flex';
            return;
        } 
        finalStatus.style.display= 'none';
}

function drawGame() {
    statusToggle(true);
    gameStatus.textContent = 'Empatou!'
}

function winGame() {
    statusToggle(true);
}



function replay() {
    statusToggle(false);
    linhaGanhar.toggle(false);
    clearBoard('normal');
}