// Script comum a todas as páginas


// Importa o JQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// Função para criação de cookies
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}


// Função para leitura de cookies
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function addcss(rule) {
    let div = $("<div />", {
      html: '&shy;<style>' + rule + '</style>'
    }).appendTo("body");    
  }

function popUp(mensagem, callback) {
    $('head').append('<link rel="stylesheet" type="text/css" href="http://www.localhost:90/TCC-Creative/css/modal.css">');
    document.body.innerHTML +=  '<div class="modal-prim" onclick="this.remove()" id="modal-prim">'+
                                '<div class="modal">' +
                                    '<img src="http://www.localhost:90/TCC-Creative/img/professorcombalao.png" style="all: unset;">' +
                                    '<div class="centered" id="mensagem"></div>' +
                                '</div>' +
                                '</div>'
    document.getElementById("mensagem").innerHTML = mensagem
    setTimeout(() => {
        document.getElementsByClassName("modal-prim")[0].remove()
        callback();
    }, 3000)
}

    