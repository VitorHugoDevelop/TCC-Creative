// Script para a página de seleção de dificuldades de matemática


// Criação da classe que verifica o progresso através da leitura de cookies
class nivel{

    // Verifica se o nível fácil e médio já foram completados
    constructor() {
        if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "niveis_port.php") {
            this.materia = 1
        } else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "niveis_mat.php") {
            this.materia = 2
        } switch(this.materia) {
            case 1:
                if (!(getCookie("PortProgFac") == "true")) {
                    this.trava(1)
                }
                if (!(getCookie("PortProgMed") == "true")) {
                    this.trava(2)
                }
                break
            case 2:
                if (!(getCookie("MatProgFac") == "true")) {
                    this.trava(1)
                }
                if (!(getCookie("MatProgMed") == "true")) {
                    this.trava(2)
                }
                break
        }
    }


    // Método que impede o usuário de avançar para níveis não desbloqueados
    // Escureçe a opção e impede a utilização
    trava(diff) {
        switch(diff) {
            case 1:
                document.getElementsByClassName("medio")[0].href = "#"
                document.getElementsByClassName("medio")[0].style.filter = "brightness(0%)"
                break
            case 2:
                document.getElementsByClassName("dificil")[0].href = "#"
                document.getElementsByClassName("dificil")[0].style.filter = "brightness(0%)"
                break
        }

    }
}

// Inicia o menu
menu = new nivel()