class mat {
    constructor() {
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_facil.html") {
            this.diff = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_medio.html") {
            this.diff = 2
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_dificil.html") {
            this.diff = 3
        }
        document.getElementById("progress").value = 0
        this.nvl = false
        this.inicia()
    }   

    inicia() {

        this.geraop()

        document.getElementById("desafio").innerHTML = this.desafio
        let array = this.shuffle([0, 1, 2, 3])
        for (let i in this.shuffle([0, 1, 2, 3])) {
            let id = "op" + (Number(i) + 1)
            if (this.decimal(this.resultado) != 0){
                var op = this.resultado - (Number(array[i] * 0.1))
            } else{
                var op = this.resultado - Number(array[i])
            }
            if (op <= 0) op * -1
            if (this.decimal(op) > 0) op = op.toFixed(2)
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
        if (numero == this.resultado.toFixed(2)) {
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
            switch(this.diff) {
                case 1:
                    if (!getCookie("MatProgFac")) {
                        setCookie("MatProgFac", true)
                    }
                    break
                case 2:
                    if (!getCookie("MatProgMed")) {
                        setCookie("MatProgMed", true)
                    }
                    break
            }

            alert("Parabéns, você completou o nível")
            window.location.replace("niveis.html");
        }        
    }

    geraop() {
        this.n1 = Math.floor((Math.random() * 9)+1)
        this.n2 = Math.floor((Math.random() * 9)+1)
        switch(this.diff) {
            case 1:
                if (!this.nvl) {
                    this.resultado = this.n1 + this.n2
                    this.desafio = this.n1 + "+" + this.n2
                } else {
                    if (this.n1 < this.n2) [this.n1, this.n2] = [this.n2, this.n1]
                    this.resultado = this.n1 - this.n2
                    this.desafio = this.n1 + "-" + this.n2
                } 
                break

            case 2:
                if (!this.nvl) {
                    this.resultado = this.n1 / this.n2
                    this.desafio = this.n1 + "/" + this.n2
                } else {
                    this.resultado = this.n1 * this.n2
                    this.desafio = this.n1 + "*" + this.n2
                } 
                break

            case 3:
                this.n3 = Math.floor((Math.random() * 9)+1)
                if (!this.nvl) {
                    let diff3
                    let ops = []
                    if (Math.floor(Math.random() * 2) == 0) {
                        diff3 = this.n1 + this.n2
                        ops.push("+")
                    }
                    else {
                        diff3 = this.n1 - this.n2
                        ops.push("-")
                    }
                    if (Math.floor(Math.random() * 2) == 0) {
                        diff3 = diff3 + this.n3
                        ops.push("+")
                    }
                    else {
                        diff3 = diff3 - this.n3
                        ops.push("-")
                    }

                    this.resultado = diff3
                    this.desafio = this.n1 + ops[0] + this.n2 + ops[1] + this.n3
                } else {
                    let diff3
                    let ops = []
                    if (Math.floor(Math.random() * 2) == 0) {
                        diff3 = this.n1 * this.n2
                        ops.push("*")
                    }
                    else {
                        diff3 = this.n1 / this.n2
                        ops.push("/")
                    }
                    if (Math.floor(Math.random() * 2) == 0) {
                        diff3 = diff3 * this.n3
                        ops.push("*")
                    }
                    else {
                        diff3 = diff3 / this.n3
                        ops.push("/")
                    }

                    this.resultado = diff3
                    this.desafio = this.n1 + ops[0] + this.n2 + ops[1] + this.n3
                } 
                break
        }
    }
    decimal(valor) { 
        if ((valor % 1) != 0) 
            return valor.toString().split(".")[1].length
        return 0
    };
}
$(document).ready(
    () => {
        jogo = new mat()
    }
)