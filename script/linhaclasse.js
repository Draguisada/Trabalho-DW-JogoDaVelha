class Linha {

    constructor(objeto1=0, objeto2=0) {
        this.elemento = document.createElement('div');
        this.elemento.classList = 'linhaGanhar';
        document.body.appendChild(this.elemento);
        this.main(objeto1, objeto2);
    }

    main(objeto1, objeto2) {
        this.y1 = objeto1.offsetTop;
        this.x1 = objeto1.offsetLeft;

        this.y2 = objeto2.offsetTop;
        this.x2 = objeto2.offsetLeft;

        // console.log(x1, y1, x2, y2);
        // Mostrar Linha
        this.toggle(true);

        // Deixa a linha com o angulo dos objetos
        this.calcLinha(this.x1, this.y1, this.x2, this.y2);

        // Media dos objetos para tentar ver o meio
        this.newX = (this.x1+this.x2)/2;
        this.newY = (this.y1+this.y2)/2;

        // Coloca a Linha na posição entre os objetos
        this.tpLinha(this.newX, this.newY);

        // Define a largura da linha para não deixar com falhas
        this.larguraLinha(this.x1, this.y1, this.x2, this.y2);
    }


    calcLinha(x1, y1, x2, y2) {
        this.elemento.style.transform = `translate(-50%,-50%) rotate(0deg)`;

        let result = (Math.atan((y2-y1)/(x2-x1))*180/Math.PI);
        this.elemento.style.transform = `translate(-50%,-50%) rotate(${result}deg)`;

    }

    tpLinha(x, y, objeto=0) {
        if (objeto != 0) {
            y = objeto.offsetTop;
            x = objeto.offsetLeft;
        }

        this.elemento.style.top = `calc(${y}px + var(--tamanho-celula)/2)`;
        this.elemento.style.left = `calc(${x}px + var(--tamanho-celula)/2)`;
    }

    larguraLinha(x1, y1, x2, y2) {
        let pitagoras = Math.sqrt((Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)));
        this.elemento.style.width = `calc(${pitagoras}px + var(--tamanho-celula)/2)`;

    }

    toggle(bool) {
        if (!bool) {
            this.elemento.style.display = 'none';
        } else {
            this.elemento.style.display = 'block';
        }
    }
}