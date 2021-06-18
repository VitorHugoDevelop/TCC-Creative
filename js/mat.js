class mat {
    constructor() {
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_facil.html") {
            this.diff = "1"
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_medio.html") {
            this.diff = "2"
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_dificil.html") {
            this.diff = "3"
        }
        document.getElementById("progress").value = 0
        this.nvl = false
        this.inicia()
    }   

    inicia() {
        this.n1 = Math.floor((Math.random() * 9)+1)
        this.n2 = Math.floor((Math.random() * 9)+1)

        this.geraop()

        document.getElementById("desafio").innerHTML = this.desafio
        let array = this.shuffle([0, 1, 2, 3])
        for (let i in this.shuffle([0, 1, 2, 3])) {
            let id = "op" + (Number(i) + 1)
            let op = this.resultado - Number(array[i])
            if (op <= 0) op * -1
            document.getElementById(id).innerHTML = op

        }        
    }

    shuffle(array) {
        var ctr = array.length,
        temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array
    }

    clicar(numero) {
        if (numero == this.resultado) {
            this.inicia()
            this.progredir()

        } else {
            alert("Voce errou")
        }
    }
    
    progredir() {
        if (document.getElementById("progress").value < 100) {
            document.getElementById("progress").value += 10
            if (document.getElementById("progress").value >= 50) {
                this.nvl = true
            }
        } else {
            document.getElementById("progress").value += 10
            alert("Parabéns, você completou o nível")
            document.cookie = 
            window.location.replace("niveis.html");
        }        
    }

    geraop() {
        if (this.diff = 1){
            if (!this.nvl) {
                this.resultado = this.n1 + this.n2
                this.desafio = this.n1 + "+" + this.n2
            } else {
                if (this.n1 < this.n2) [this.n1, this.n2] = [this.n2, this.n1]
                this.resultado = this.n1 - this.n2
                this.desafio = this.n1 + "-" + this.n2

            }
        }
    }
}

$(document).ready(
    () => {
        jogo = new mat()
    }
)
