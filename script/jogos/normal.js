function celulaClick(actor) {
    if (actor.textContent == ""){
    actor.textContent = jogador[jogador[0]];
    jogador[0] = jogador[0]-1 ? 1 : 2;
    verJogar.textContent = jogador[jogador[0]];
    round+=1;
    if (checkWin('normal')) {winGame(); return;};
    if (round >= 9) {
        drawGame();
    }
}}

if (jogo == 1) {

celula = document.querySelector('#normal jogo');
celula.addEventListener('click', event => celulaClick(event.target));





}