//SOURCE - https://www.youtube.com/watch?v=n3Kx5Eg2Hlw
//obrigado Marcos André Silveira Kutova você é um herói


let imagens = ["Cachorro","Elefante","Gato","Leão","Macaco","Peixe-palhaço","Tubarão","Golfinho"]
let fundo = "../../img/memoria.png"

let cartas = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let cliquesTravados = false
let cartaVirada = false
let posCartaVirada = -1
let valorCartaVirada = 0
let pontos = 0


$("document").ready( () => {
    let elemImagens = document.querySelectorAll('#memoria img')
    elemImagens.forEach((img, i) => {
        img.draggable = false
        img.src = fundo
        img.style.opacity = 0.8
    })

    document.querySelector("#btInicio").onclick = iniciaJogo;
}
)
const iniciaJogo = () => {
    document.getElementById("btInicio").disabled = true
    for (let i=1; i<cartas.length; i++) {
        let p = Math.trunc(Math.random()*cartas.length)
        let aux = cartas[p]
        cartas[p] = cartas[i]
        cartas[i] = aux
    }

    let elemImagens = document.querySelectorAll("#memoria img")
    elemImagens.forEach((img, i) => {
        img.src = fundo
        img.onclick = clicar
        img.style.opacity = 1
    })    
}
const clicar = (e) => {
    if (cliquesTravados) return
    cliquesTravados = true
    const p = +e.target.getAttribute('data-valor')
    const valor = cartas[p-1]
    e.target.src = "../../img/" + imagens[valor - 1] + ".png"
    e.target.onclick = null
    e.target.draggable = false
    if(!cartaVirada) {
        cartaVirada = true
        posCartaVirada = p
        valorCartaVirada = valor
        cliquesTravados = false
    } else {
        if (valor == valorCartaVirada) {
            cliquesTravados = false
            pontos++
        } else {
            const p0 = posCartaVirada            
            cliquesTravados = true
            setTimeout(() => {
                e.target.src = fundo
                e.target.onclick = clicar
                let img = document.querySelector("#memoria #i"+(p0-1))
                img.src = fundo
                img.onclick = clicar
                cliquesTravados = false
            }, 2100);
        }
        cartaVirada = false
        posCartaVirada = -1
        valorCartaVirada = 0
    }
    if (pontos >= 8){
        document.getElementById("btInicio").disabled = false

    }


}