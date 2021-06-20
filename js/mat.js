// Script do jogo de matemática


// Classe principal
class mat {


    // Método que inicializa a classe
    constructor() {


        // Verifica a dificuldade atual através do endereço da página
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_facil.html") {
            this.diff = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_medio.html") {
            this.diff = 2
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "mat_dificil.html") {
            this.diff = 3
        }

        document.getElementById("progress").value = 0 // Inicia a barra de progresso


        // Definição de valores que serão utilizados
        this.nvl = false
        this.divs = [[1,1],[2,2],[2,1],[3,3],[3,1],[4,4],[4,2],[4,1],[5,5],[5,1],[6,6],[6,3],[6,2],[6,1],[7,7],[7,1],
                    [8,8],[8,4],[8,2],[8,1],[9,9],[9,3],[9,1],[10,10],[10,5],[10,2],[10,1]]
        let lista = []
        for (i=1;i<=10;i++) lista[i] = []
        for (var i=1; i<=10; i=i+1) {
            for (var j=1; j<=10; j=j+1) {
                var multiplicacao = i*j;
                lista[i][j] = multiplicacao
            }
        }
        this.tabuada = lista

        this.inicia()// Inicia a execução do jogo
    }   


    // Método que inicia o jogo
    inicia() {
        this.geraop() // Gera o desafio
        document.getElementById("desafio").innerHTML = this.desafio // Apresenta o desafio na interface
        
        // Dispõe as quatro opções
        let array = this.shuffle([0, 1, 2, 3])
        for (let i in this.shuffle([0, 1, 2, 3])) {
            let id = "op" + (Number(i) + 1)
            var op = this.resultado - Number(array[i])
            document.getElementById(id).innerHTML = op
        }        
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


    // Método executado ao clicar em alguma opção
    clicar(numero) {
        // Caso o usuário acerte, gera outro desafio e progride
        if (numero == this.resultado) {
            this.inicia()
            this.progredir()
        } 
        // Caso esteja errado, mostra um alerta
        else {
            alert("Voce errou")
            //todo
        }
    }
    

    // Método responsável pela progressão
    progredir() {

        // Checa se o usuário já atingiu o objetivo
        if (document.getElementById("progress").value < 100) {
            document.getElementById("progress").value += 10
            
            // Checa se o usuário já atingiu metade do progresso
            if (document.getElementById("progress").value >= 50) {
                this.nvl = true
            }
        } 
        
        // Caso tenha atingido, salva o progresso através de cookies
        // e retorna ao menu de níveis
        else {
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
            //todo
            window.location.replace("niveis.html");
        }        
    }


    // Método que gera os desafios
    geraop() {

        // Gera dois número aleatórios entre 1 e 10 para o desafio
        this.n1 = Math.floor((Math.random() * 9)+1)
        this.n2 = Math.floor((Math.random() * 9)+1)

        // Gera os desafios com base na dificuldade e no progresso atual
        switch(this.diff) {

            // Fácil
            case 1:
                
                // Operações de soma e subtração, define as varíaveis resultado e desafio
                if (!this.nvl) {
                    this.resultado = this.n1 + this.n2
                    this.desafio = this.n1 + "+" + this.n2
                } else {
                    if (this.n1 < this.n2) [this.n1, this.n2] = [this.n2, this.n1]
                    this.resultado = this.n1 - this.n2
                    this.desafio = this.n1 + "-" + this.n2
                } 
            break

            // Médio
            case 2:

                // Operações de soma e subtração, define as varíaveis resultado e desafio
                if (!this.nvl) {
                    this.resultado = this.n1 * this.n2
                    this.desafio = this.n1 + "*" + this.n2
                } else {

                    // Para manter os resultados e divisões em números inteiros e não decimais
                    // a operação de divisão é retirada de uma lista de divisões que resultam em inteiros
                    let valores = this.divs[Math.floor(Math.random() * this.divs.length)]
                    this.resultado = valores[0] / valores[1]
                    this.desafio = valores[0] + "÷" + valores[1]
                } 
            break
            
            // Difícil
            case 3:

                // Aqui as coisas ficam mais complicadas
                // um terceiro número é gerado para que o desafio possa ter 3 operações
                this.n3 = Math.floor((Math.random() * 9)+1)

                // Os primeiros 5 desafios são de soma e subtração
                if (!this.nvl) {
                    let diff3 // Varíavel auxiliar
                    let ops = [] // Lista onde as operações são guardadas

                    // Há uma chance de 50% de ser soma ou subtração
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

                    // Define o resultado
                    this.resultado = diff3
                    // Monta o desafio com base nas operações salvas em uma lista
                    this.desafio = this.n1 + ops[0] + this.n2 + ops[1] + this.n3

                
                // Agora os desafios são de divisão e multiplicação
                } else {
                    let diff3 // Varíavel auxiliar
                    let ops = [] // Lista onde as operações são guardadas

                    // Há uma chance de 50% de ser multiplicação ou divisão
                    if (Math.floor(Math.random() * 2) == 0) {
                        diff3 = this.n1 * this.n2
                        ops.push("*")
                    }
                    else {

                        // Para manter os resultados e divisões em números inteiros e não decimais
                        // a operação de divisão é retirada de uma lista de divisões que resultam em inteiros
                        let valores = this.divs[Math.floor(Math.random() * this.divs.length)]
                        diff3 = valores[0] / valores[1]
                        this.n1 = valores[0]
                        this.n2 = valores[1]
                        ops.push("÷")
                    }

                    // Testa o resultado da primeira parte da operação para checar quais
                    // números de 1 a 10 conseguem dividi-lo em um número inteiro
                    let possiveis = this.testadiv(diff3) 

                    if (Math.floor(Math.random() * 2) == 0) {
                        diff3 = diff3 * this.n3
                        ops.push("*")
                    }
                    else {
                        let valor = possiveis[Math.floor(Math.random() * possiveis.length)]
                        diff3 = diff3 / valor
                        this.n3 = valor
                        ops.push("÷")
                    }

                    this.resultado = diff3
                    this.desafio = this.n1 + ops[0] + this.n2 + ops[1] + this.n3
                } 
                break
        }
    }

    // Testa um número para descobrir quais números de 1 a 10 conseguem dividi-lo em um inteiro
    testadiv(num) {
        let possib = []
        let i, i2
        for (i in this.tabuada) {
            for (i2 in this.tabuada) {
                if (this.tabuada[i][i2] == num) {
                    possib.push(i)
                }
            }
        }
        return possib
    }

}

// Após o documento ser carregado inicia o jogo
$(document).ready(
    () => {
        jogo = new mat()
    }
)