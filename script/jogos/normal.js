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

function checkWin(string) {
    if (round<5) { // Se não ter nem possibilidade de ter vitória, nem precisa calcular e gastar recursos.
        return false; 
    }

    let jogo = getJogo(string);
    let crionca = jogo.children;

    if (crionca[0].textContent == crionca[8].textContent && crionca[0].textContent == crionca[4].textContent && crionca[0].textContent != '') {
        calcLinha(1, 1, 3, 3);
        return true;
    }

    if (crionca[2].textContent == crionca[4].textContent && crionca[2].textContent == crionca[6].textContent && crionca[2].textContent != '') {
        calcLinha(1, 1, 3, 3, -1);
        return true;
    }

    for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        if (crionca[j].textContent == crionca[j+3].textContent && crionca[j+3].textContent == crionca[j+6].textContent && crionca[j].textContent != '') {
            calcLinha(1, 1, 3, 1);
            return true;
        }   
    }
        if (crionca[i*3].textContent == crionca[(i*3)+1].textContent && crionca[(i*3)+1].textContent == crionca[(i*3)+2].textContent && crionca[(i*3)].textContent != '') {
            calcLinha(1, 1, 1, 1);
            return true;    
        }
    }
}


// function jogoNormalMain() {
for (i=0;i<verJogar.length;i++){
    verJogar[i].textContent = jogador[jogador[0]];
    verJogar[i].style.color = jogador[jogador[0]+2];  
}
  

celula = document.querySelector('#normal jogo');
celula.addEventListener('click', event => celulaClick(event.target));
// }