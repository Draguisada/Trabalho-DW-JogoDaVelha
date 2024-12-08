// Variaveis e Const do código
let jogo;
jogo = 1;
let jogador = [1, 'X', 'O'];
let celula;
let round = 0;

const verJogar = document.querySelector('ui strong');
const jogoNormal = document.getElementById('normal');


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

    for (var i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        if (crionca[j].textContent == crionca[j+3].textContent && crionca[j+3].textContent == crionca[j+6].textContent && crionca[j].textContent != '') {
            return true;
        }

        if (crionca[j+i*3].textContent == crionca[j+i*3+1].textContent && crionca[j+i*3+1].textContent == crionca[j+i*3+2].textContent && crionca[j+i*3].textContent != '') {
            return true;    
        }
    }
    }
}

function drawGame() {
    alert('jogo empatado');
}

function winGame() {
    alert('jogo ganho');
}