// Variaveis e Const do código
let jogo;
jogo = 1;
// jogoNormalMain();
let jogador = [1, 'X', 'O', '#f00', '#00f'];
let celula;
let round = 0;

const verJogar = document.getElementsByClassName('playerIdent');
const jogoNormal = document.getElementById('normal');
const finalStatus = document.getElementById('status');
const gameStatus = document.querySelector('#status h1');
const linhaGanhar = document.getElementById('linhaGanhar');
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

function barToggle(qual, toggle) {
    if (qual == 'status'){
    
        if (toggle) {
            finalStatus.style.display = 'flex';
            return;
        } 
        finalStatus.style.display= 'none';

    }
    else if (qual == 'linha'){

        if (toggle) {
            linhaGanhar.style.display = 'flex';
            return;
        }
        linhaGanhar.style.display= 'none';
    }
}

function drawGame() {
    barToggle('status',true);
    gameStatus.textContent = 'Empatou!'
}

function winGame() {
    barToggle('status', true);
    barToggle('linha', true)
    
}

function calcLinha(x1, y1, x2, y2, mult=1) {
    barToggle('linha', true);
    linhaGanhar.style.rotate = `0deg`;
    if (x1 == x2) {
        return 0;
    }
    result = (Math.atan((x2-x1)/(y2-y1))*180/Math.PI)*mult;
    linhaGanhar.style.rotate = `${result}deg`;
    
    return result;
}

function replay() {
    barToggle('status', false);
    barToggle('linha', false);
    clearBoard('normal');
}