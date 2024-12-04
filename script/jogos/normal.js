function celulaClick(actor) {
    if (actor.textContent == ""){
    actor.textContent = jogador[jogador[0]];
    jogador[0] = jogador[0]-1 ? 1 : 2;
}
}


if (jogo == 1) {


celula = document.querySelector('#normal jogo');
celula.addEventListener('click', event => celulaClick(event.target));





}