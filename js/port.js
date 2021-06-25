class port {
    constructor(){
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_facil.html") {
            this.diff = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_medio.html") {
            this.diff = 2
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "port_dificil.html") {
            this.diff = 3
        }
        document.getElementById("progress").value = 0
        this.palavras = ["Maçã", "Banana", "Caju", "Abacaxi", "Melancia", "Morango", "Pêssego", "Kiwi", "Acerola", "Caqui",
                        "Vaca", "Avião", "Avenida", "Telefone", "Cavalo", "Fogo", "Água", "Uva", "Foguete", "Navio",
                        "Carro", "Bicicleta", "Cachorro", "Gato", "Pássaro", "Nuvem", "Céu", "Sol", "Lua", "Flor"]
    }

    inicia(){
        
    }

    clica(palavra){

        if(palavra == this.palavra) {
            progredir()
        } else {
            alert("Você errou")
        }

    }

}
$(document).ready(
    () => {
        jogo = new port()
    }
)