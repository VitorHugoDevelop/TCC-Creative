class geral {
    constructor() {
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "geral_geo.php") {
            this.mat = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "geral_nat.php") {
            this.mat = 2
        }
        document.getElementById("progress").value = 0
        this.geo = ["Verão","Inverno","Primavera","Outono","Ensolarado","Chuvoso","Tarde","Dia","Noite","Manhã"]
        this.aquaticos = ["Peixe-palhaço","Tubarão","Estrela do mar","Polvo","Golfinho"]
        this.terrestres = ["Cachorro","Elefante","Gato","Leão","Macaco"]
        this.animais = ["Cachorro","Elefante","Gato","Leão","Macaco","Peixe-palhaço","Tubarão","Estrela do mar","Polvo","Golfinho"]
        this.count = 0
        this.palavracount = 0
        this.inicia()
    }
    
    inicia() {
        if (this.mat == 1) {
            if (this.count + 3 >= this.geo.length) this.count = 0
            this.palavra = this.geo[this.palavracount]
            this.geo2 = []
            this.geo2.push(this.palavra)
            this.geo2.push(this.geo[this.count+2])
            this.geo2.push(this.geo[this.count+1])
            this.geo2.push(this.geo[this.count+3])
            let id = this.shuffle([1,2,3,4])
            for (let i in [0, 1, 2, 3]) {
                document.getElementById("op"+id[i]).innerHTML = this.geo2[i]
            } 
        }
        if (this.mat == 2) {
            let i = Math.floor(Math.random(this.animais.length))
            this.animais = this.shuffle(this.animais)
            this.palavra = this.animais[i]
            this.animais.splice(i,1)
        }
        document.getElementById("palavra").src = "../../img/"+this.palavra+".png"
        document.getElementById("palavra").alt = this.palavra
    }

    clicar(palavra) {
        if (this.mat == 1) {
            if(palavra == this.palavra) {
                this.progredir()
                this.count++
                this.palavracount++
                this.inicia()
            } else {
                if (this.palavra == "Verão" ||this.palavra == "Primavera" ||this.palavra == "Inverno" ||this.palavra == "Outono") {
                    popUp("Pense bem,<br>qual estação aparece na imagem?")
                } else if (this.palavra == "Chuvoso" ||this.palavra == "Ensolarado" ) {
                    popUp("Um dia chuvoso<br>é quando<br>está chovendo!")
                    
                } else {
                    popUp("Manhã é hora de<br>acordar, noite é hora<br>de dormir!")
                }
            }
        } else if (this.mat == 2) {
            if (palavra == "Aquático") {
                if(this.verificaAq()) {
                    this.progredir() 
                    this.count++
                    this.inicia()
                } else {
                    popUp("Os animais <br>aquáticos são os<br>que vivem na água!")
                }
            } else if (palavra =="Terrestre") {
                if(this.verificaTerr()) {
                    this.progredir() 
                    this.count++
                    this.inicia()
                } else {
                    popUp("Os animais <br>terrestres são os que vivem na terra!")
                }
           }
        }
    }

    verificaAq() {
        for (let i in this.aquaticos) {
            if (this.palavra == this.aquaticos[i]) {
                return true
            }
        }
        return false
    }
    verificaTerr() {
        for (let i in this.terrestres) {
            if (this.palavra == this.terrestres[i]) {
                return true
            }
        }
        return false
    }
    
    progredir() {
        if (Number(document.getElementById("progress").style.width.replace("%", "")) < 90) {
            let progVal = Number(document.getElementById("progress").style.width.replace("%", ""))
            document.getElementById("progress").style.width = progVal + 10 + "%"
        } else {
            document.getElementById("progress").value += 10
            let x = () => {
                window.location.replace("../../BancoDeDados/progresso.php?vaipara=geral");
        }
            popUp("Parabéns, você<br>completou<br>esta atividade!", x, true)
        }
    }

    shuffle(array) {
        let ctr = array.length,
        temp, index
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr)
            ctr--
            temp = array[ctr]
            array[ctr] = array[index]
            array[index] = temp
        }
        return array
    }
}

$(document).ready(
    () => {
        jogo = new geral()
    }
)