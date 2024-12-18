let x1;
let x2;
let y1;
let y2;

function mainLinha(objeto1, objeto2) {
    y1 = objeto1.offsetTop;
    x1 = objeto1.offsetLeft;

    y2 = objeto2.offsetTop;
    x2 = objeto2.offsetLeft;

    // console.log(x1, y1, x2, y2);

    // Deixa a linha com o angulo dos objetos
    calcLinha(x1, y1, x2, y2);

    // Media dos objetos para tentar ver o meio
    let newX = (x1+x2)/2;
    let newY = (y1+y2)/2;

    // Coloca a Linha na posição entre os objetos
    tpLinha(newX, newY);

    // Define a largura da linha para não deixar com falhas
    larguraLinha(x1, y1, x2, y2);
}

function calcLinha(x1, y1, x2, y2, mult=1) {
    barToggle('linha', true);
    linhaGanhar.style.transform = `translate(-50%,-50%) rotate(0deg)`;
    if (x1 == x2) {
        return 0;
    }
    result = (Math.atan((y2-y1)/(x2-x1))*180/Math.PI)*mult;
    linhaGanhar.style.transform = `translate(-50%,-50%) rotate(${result}deg)`;
    
    return result;
}

function tpLinha(x, y, objeto=0) {
    if (objeto != 0) {
        y = objeto.offsetTop;
        x = objeto.offsetLeft;
    }
    // console.log(x, y, objeto);



    linha.style.top = `calc(${y}px + var(--tamanho-celula)/2)`;
    linha.style.left = `calc(${x}px + var(--tamanho-celula)/2)`;
}

function larguraLinha(x1, y1, x2, y2) {

    let pitagoras = Math.sqrt((Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)));
    linha.style.width = `calc(${pitagoras}px + var(--tamanho-celula)/2)`;

}