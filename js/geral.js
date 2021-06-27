class geral {
    constructor() {
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "geral_geo.php") {
            this.mat = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "geral_nat.php") {
            this.mat = 2
        }
        document.getElementById("progress").value = 0
        this.geo = ["Verão","Inverno","Primavera","Outono","Ensolarado","Chuvoso","Tarde","Dia","Noite","Manhã"]
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
        document.getElementById("palavra").src = "../../img/"+this.palavra+".png"
        document.getElementById("palavra").alt = this.palavra
    }

    clicar(palavra) {
        if(palavra == this.palavra) {
            this.progredir()
            this.count++
            this.palavracount++
            this.inicia()
        } else {
            alert("Você errou")
        }
    }
    
    progredir() {
        if (document.getElementById("progress").value < 90) {
            document.getElementById("progress").value += 10
        } else {
            document.getElementById("progress").value += 10
            alert("Parabéns, você completou o nível")
            //TODO
            window.location.replace("../../BancoDeDados/progresso.php?vaipara=geral");
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