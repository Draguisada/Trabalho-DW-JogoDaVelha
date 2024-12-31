// jogoNormalMain();
let jogador = [1, 'X', 'O', '#f00', '#00f'];
let celula;
let round = 0;

linhaGanhar = new Linha();  

const verJogar = document.getElementsByClassName('playerIdent');
const jogoNormal = document.getElementById('normal');
const jogo = document.querySelector('#normal jogo');
const finalStatus = document.getElementById('status');
const gameStatus = document.querySelector('#status h1');
const rejogarJogo = document.getElementById('replay');
const ui = document.querySelector('ui');
const menu = document.querySelector('menu');
const irMenu1 = document.getElementById('ir-menu');
const config = document.querySelector('config');

const j1n = document.getElementById('jogador1N');
const j2n = document.getElementById('jogador2N');

const j1c = document.getElementById('jogador1C');
const j2c = document.getElementById('jogador2C');

const jogaroJogo = document.getElementById('iniciar-jogo');
const abrirConfig = document.getElementById('config');

// Comandos antes do jogo começar
jogaroJogo.addEventListener('click', showJogo);
rejogarJogo.addEventListener('click', replay);
irMenu1.addEventListener('click', showMenu)

showMenu();
statusToggle(false);
// Funções globais

function clearBoard() {
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
    gameStatus.textContent = 'Empatou!';
}

function winGame() {
    statusToggle(true);
}

function replay() {
    statusToggle(false);
    linhaGanhar.toggle(false);
    clearBoard('normal');
}

function showJogo() {
    jogo.style.display = 'grid';
    ui.style.display = 'block';
    menu.style.display = 'none';
    statusToggle(false);

    jogador[1] = j1n.value;
    jogador[2] = j2n.value;
    jogador[3] = j1c.value;
    jogador[4] = j2c.value;

    for (i=0;i<verJogar.length;i++){
        verJogar[i].textContent = jogador[jogador[0]];
        verJogar[i].style.color = jogador[jogador[0]+2];
    }
}

function showMenu() {
    jogo.style.display = 'none';
    ui.style.display = 'none'
    menu.style.display = 'flex';
    linhaGanhar.toggle(false);
    clearBoard();
}