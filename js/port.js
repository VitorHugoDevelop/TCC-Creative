class port {
    constructor(){
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_facil.php") {
            this.diff = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_medio.php") {
            this.diff = 2
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_dificil.php") {
            this.diff = 3
        }
        document.getElementById("progress").value = 0
        this.palavras = ["Maçã", "Banana", "Caju", "Abacaxi", "Caqui", "Fogo", "Pêssego", "Kiwi", "Acerola", "Melancia",
                        "Vaca", "Gato", "Cachorro", "Telefone", "Cavalo", "Morango", "Carro", "Nuvem", "Foguete", "Navio",
                        "Avião", "Bicicleta", "Xícara", "Celular", "Pássaro", "Uva", "Televisão", "Sol", "Lua", "Flor"]
        this.facil = this.palavras.slice(0,10)
        this.medio = this.palavras.slice(10,20)
        this.dificil = this.palavras.slice(20,30)
        this.silabas = ["Va", "Ga", "Ca", "Te", "Mo", "Nu", "Fo", "Na"]
        this.alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        this.count = 0
        this.sils = []
        this.inicia()
    }

    inicia(){
        if(this.diff==1) {  
            this.palavra = this.facil[this.count]
            this.posicLetra = parseInt(this.alphabetPosition(this.palavra.charAt(0)))
            this.shuffle(this.letras = [this.palavra.charAt(0), this.alfabeto[this.posicLetra+1],this.alfabeto[this.posicLetra+2],this.alfabeto[this.posicLetra+3],])
            for (let i in this.shuffle([0, 1, 2, 3])) {
                let id = "op" + (Number(i) + 1)
                var op = this.letras
                document.getElementById(id).innerHTML = op[i]
            }
        } else if (this.diff==2) {
            this.silabas2 = this.silabas
            this.palavra = this.medio[this.count]
            this.sils = []
            let x = Math.floor((Math.random() * 6))
            this.sils.push(this.silabas2[x])
            while(this.sils[0] == this.palavra.slice(0,2)){
                this.sils[0] = this.silabas2[Math.floor((Math.random() * 6))]
            }
            this.sils.push(this.silabas2[x+1])
            while(this.sils[1] == this.palavra.slice(0,2)){
                this.sils[1] = this.silabas2[Math.floor((Math.random() * 6))]
            }
            this.sils.push(this.silabas2[x+2])
            while(this.sils[2] == this.palavra.slice(0,2)){
                this.sils[2] = this.silabas2[Math.floor((Math.random() * 6))]
            }
            this.sils.push(this.palavra.slice(0,2))
            this.sils = this.shuffle(this.sils)

            for (let i in this.shuffle([0, 1, 2, 3])) {
                let id = "op" + (Number(i) + 1)
                document.getElementById(id).innerHTML = this.sils[i]
            }                  
        } else if (this.diff == 3) {
            this.palavra = this.dificil[this.count]
            this.palavras2 = []
            this.palavras2.push(this.palavras[this.count])
            this.palavras2.push(this.palavras[this.count+2])
            this.palavras2.push(this.palavras[this.count+1])
            this.palavras2.push(this.palavra)
            this.palavras2 = this.shuffle(this.palavras2)
            for (let i in [0, 1, 2, 3]) {
                let id = "op" + (Number(i) + 1)
                document.getElementById(id).innerHTML = this.palavras2[i]
            } 
                
        }
        
        document.getElementById("palavra").src = "../../img/"+this.palavra+".png"
        document.getElementById("palavra").alt = this.palavra
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

    clicar(palavra){
        switch(this.diff) {
            case 1:
                if(palavra == this.palavra.charAt(0)) {
                    console.log("aqui")
                    this.progredir()
                    this.count++
                    this.inicia()
                } else {
                    alert("Você errou")
                }
                break
            case 2:
                if(palavra == this.palavra.slice(0,2)) {
                    this.progredir()
                    this.count++
                    this.inicia()
                } else {
                    alert("Você errou")
                }
                break
            case 3:
                if(palavra == this.palavra) {
                    this.progredir()
                    this.count++
                    this.inicia()
                } else {
                    alert("Você errou")
                }
                break
        }
    }

    alphabetPosition(text) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
          var code = text.toUpperCase().charCodeAt(i)
          if (code > 64 && code < 91) result += (code - 64) + " ";
        }
      
        return result.slice(0, result.length - 1);
      }

    progredir() {

        // Checa se o usuário já atingiu o objetivo
        if (document.getElementById("progress").value < 100) {
            document.getElementById("progress").value += 10
        }        
        // Caso tenha atingido, salva o progresso através de cookies
        // e retorna ao menu de níveis
        else {
            document.getElementById("progress").value += 10
            switch(this.diff) {
                case 1:
                    if (!getCookie("PortProgFac")) {
                        setCookie("PortProgFac", true)
                    }
                    break
                case 2:
                    if (!getCookie("PortProgMed")) {
                        setCookie("PortProgMed", true)
                    }
                    break
                case 3:
                    if (!getCookie("PortProgMed")) {
                        setCookie("PortProgMed", true)
                    }
                    if (!getCookie("PortProgFac")) {
                        setCookie("PortProgFac", true)
                    }
            }

            alert("Parabéns, você completou o nível")
            //TODO
            window.location.replace("niveis_port.php");
        }        
    }

}
$(document).ready(
    () => {
        jogo = new port()
    }
)