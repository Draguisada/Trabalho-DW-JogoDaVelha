function celulaClick(actor) {
    if (actor.textContent == ""){
    actor.textContent = jogador[jogador[0]];
    actor.style.color = jogador[jogador[0]+2];
    jogador[0] = jogador[0]-1 ? 1 : 2;
    
    round+=1;
    if (checkWin('normal')) {winGame(); return;};
    if (round >= 9) {
        drawGame();
    }
    for (i=0;i<verJogar.length;i++){
        verJogar[i].textContent = jogador[jogador[0]];
        verJogar[i].style.color = jogador[jogador[0]+2];  
    }
}}


// function jogoNormalMain() {
for (i=0;i<verJogar.length;i++){
    verJogar[i].textContent = jogador[jogador[0]];
    verJogar[i].style.color = jogador[jogador[0]+2];  
}
  

celula = document.querySelector('#normal jogo');
celula.addEventListener('click', event => celulaClick(event.target));
// }