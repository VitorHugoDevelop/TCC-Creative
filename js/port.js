
// Classe principal
class port {

    // Método que inicializa a classe
    constructor(){
        // Verifica a dificuldade atual através do endereço da página
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_facil.php") {
            this.diff = 3
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_medio.php") {
            this.diff = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_dificil.php") {
            this.diff = 2
        }
        document.getElementById("progress").style.width = "0%" // Inicia a barra de progresso

        // Definição de valores que serão utilizados
        this.palavras = ["Maçã", "Banana", "Carro", "Abacaxi", "Abacate", "Nuvem", "Pêssego", "Foguete", "Bicicleta", "Melancia",
                        "Vaca", "Gato", "Celular", "Telefone", "Cavalo", "Xícara", "Caju", "Fogo", "Kiwi", "Cereja",
                        "Avião", "Carro", "Morango", "Cachorro", "Pássaro", "Uva", "Televisão", "Sol", "Lua", "Flor"]
        this.facil = this.palavras.slice(0,11)
        this.medio = this.palavras.slice(10,21)
        this.dificil = this.palavras.slice(19,30)
        this.silabas = ["Va", "Ga", "Ca", "Te", "Mo", "Nu", "Fo", "Na"]
        this.alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        this.count = 0
        this.sils = []
        this.dica = false

        this.inicia()// Inicia a execução do jogo
    }

    // Método que inicia o jogo
    inicia(){
        
        // As dificuldades estão fora de ordem pois foram mudadas no meio do caminho
        // Médio
        if(this.diff==1) {  
            // Separa a priemira letra
            this.palavra = this.facil[this.count]
            this.posicLetra = parseInt(this.alphabetPosition(this.palavra.charAt(0)))
            this.shuffle(this.letras = [this.palavra.charAt(0), this.alfabeto[this.posicLetra+1],this.alfabeto[this.posicLetra+2],this.alfabeto[this.posicLetra+3],])
            for (let i in this.shuffle([0, 1, 2, 3])) {
                let id = "op" + (Number(i) + 1)
                var op = this.letras
                document.getElementById(id).innerHTML = op[i]
            }

        // Difícil
        } else if (this.diff==2) {

            //Separa as sílabas e evita repetições
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

            let jj = function hasDuplicates(array) {
                return (new Set(array)).size !== array.length;
            }
            if (jj(this.sils)) {
                this.inicia()
                return
            }

            for (let i in this.shuffle([0, 1, 2, 3])) {
                let id = "op" + (Number(i) + 1)
                document.getElementById(id).innerHTML = this.sils[i]
            }        
            
        // Fácil
        } else if (this.diff == 3) {

            // Mais simples, utiliza a palavra inteira
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
        
        // Apresenta a imagem
        document.getElementById("palavra").src = "../../img/"+this.palavra+".png"
        document.getElementById("palavra").alt = this.palavra
    }

    // Método que embaralha os números para gerar as opções 
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

    // Função responsável por interagir com o click
    // Realiza diferentes operações baseado no parâmetro da dificuldade
    clicar(palavra){
        switch(this.diff) {
            case 3:
                if(palavra == this.palavra) {
                    this.progredir()
                    this.count++
                    this.inicia()
                } else {
                    if (!this.dica) {
                        popUp("Essa figura<br>não se parece<br>muito com "+palavra+"...")
                        this.dica = true
                    } else popUp("Puxa, que pena...<br>Tente outra vez!")
                }
                break
            case 1:
                if(palavra == this.palavra.charAt(0)) {
                    console.log("aqui")
                    this.progredir()
                    this.count++
                    this.inicia()
                } else {
                    if (!this.dica) {
                        popUp("<br>A primeira letra<br>de "+this.palavra+"?<br>Essa está na ponta da lingua...")
                        this.dica = true
                    } else popUp("Puxa, que pena...<br>Tente outra vez!")
                }
                break
            case 2:
                if(palavra == this.palavra.slice(0,2)) {
                    this.progredir()
                    this.count++
                    this.inicia()
                } else {
                    if (!this.dica) {
                        popUp("<br>A primeira sílaba<br>de "+this.palavra+"?<br>Essa está na ponta da lingua...")
                        this.dica = true
                    } else popUp("Não desista!<br>Continue tentando!")
                }
                break
        }
    }

    // Método que retorna a posição alfabética da letra
    alphabetPosition(text) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
          var code = text.toUpperCase().charCodeAt(i)
          if (code > 64 && code < 91) result += (code - 64) + " ";
        }
      
        return result.slice(0, result.length - 1);
      }

    // Método responsável pela progressão
    progredir() {

        // Checa se o usuário já atingiu o objetivo
        if (Number(document.getElementById("progress").style.width.replace("%", "")) < 90) {
            let progVal = Number(document.getElementById("progress").style.width.replace("%", ""))
            document.getElementById("progress").style.width = progVal + 10 + "%"
        }        
        // Caso tenha atingido, salva o progresso através de cookies
        // e retorna ao menu de níveis
        else {
            document.getElementById("progress").value += 10
            switch(this.diff) {
                case 3:
                    if (!getCookie("PortProgFac")) {
                        setCookie("PortProgFac", true)
                    }
                    break
                case 1:
                    if (!getCookie("PortProgMed")) {
                        setCookie("PortProgMed", true)
                    }
                    break
                case 2:
                    if (!getCookie("PortProgMed")) {
                        setCookie("PortProgMed", true)
                    }
                    if (!getCookie("PortProgFac")) {
                        setCookie("PortProgFac", true)
                    }
            }

            let x = () => {
                window.location.replace("../../BancoDeDados/progresso.php?vaipara=port");
            }
            if (this.diff != 3) popUp("Parabéns,<br>você conseguiu!<br>Agora avance para a próxima<br>dificuldade!", x, true)
            else popUp("Parabéns,<br>você completou as atividades<br>de português!", x, true)
        }        
    }

}

// Após o documento ser carregado inicia o jogo
$(document).ready(
    () => {
        jogo = new port()
    }
)