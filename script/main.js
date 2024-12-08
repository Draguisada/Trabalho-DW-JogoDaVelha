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

    let crionca = jogo.children;
    for (i=0;  i<crionca.length  ;i++) {
        crionca[i].textContent = '';
    }
}

function checkWin(string) {
    if (round<5) {
        return false;
    }
    let jogo = getJogo(string);
    let crionca = jogo.children;

    if (crionca[0].textContent == crionca[8].textContent && crionca[0].textContent == crionca[4].textContent && crionca[0].textContent != '') {
        return true;
    }

    if (crionca[2].textContent == crionca[4].textContent && crionca[2].textContent == crionca[6].textContent && crionca[2].textContent != '') {
        return true;
    }

    for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        if (crionca[j].textContent == crionca[j+3].textContent && crionca[j+3].textContent == crionca[j+6].textContent && crionca[j].textContent != '') {
            return true;
        }   
    }
        if (crionca[i*3].textContent == crionca[(i*3)+1].textContent && crionca[(i*3)+1].textContent == crionca[(i*3)+2].textContent && crionca[(i*3)].textContent != '') {
            return true;    
        }
    }
}

function statusBarToggle(toggle) {
    if (toggle) {
        finalStatus.style.display = 'flex';
        return;
    }
    finalStatus.style.display= 'none';

}

function drawGame() {
    statusBarToggle(true);
    gameStatus.textContent = 'Empatou!'
}

function winGame() {
    statusBarToggle(true);
}