class nivel{
    constructor() {
        if (!(getCookie("MatProgFac") == "true")) {
            this.trava(1)
        }
        if (!(getCookie("MatProgMed") == "true")) {
            this.trava(2)
        }
        
    }

    trava(diff) {
        switch(diff) {
            case 1:
                document.getElementsByClassName("medio")[0].href = "#"
                document.getElementsByClassName("medio")[0].style.filter = "brightness(0%)"
                //todo
                break
            case 2:
                document.getElementsByClassName("dificil")[0].href = "#"
                document.getElementsByClassName("dificil")[0].style.filter = "brightness(0%)"
                //todo
                break
        }

    }
}
new nivel()