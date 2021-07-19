<?php
    // Desfaz qualquer login anterior ao acessar essa página
    setcookie('login', null, -1, "/");
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/modal.css">
    <title>Entrar</title>
</head>

<body>
    <div class="main">
        <div class="chao"></div>
        <h1>Entrar</h1>
        <div class="login">
            <form method="post" action="BancoDeDados/login.php" class="formulario">
                <label>Digite seu nome</label>
                <input placeholder="Nome" type="text" name="usuario">
                <label>Digite sua senha</label>
                <input placeholder="Senha" type="password" name="senha">
                <input type="submit" Value="Entrar" class="botao">
            </form>
        </div>
        <div class="cadastrar">
            <p>NÃO POSSUI UMA CONTA? CRIE UMA CONTA AGORA MESMO!</p>
            <div class="div-login">
                <a href="cadastrar.php">Cadastrar</a>
            </div>
        </div>
    </div>
    <script src="js/common.js"></script>
</body>
<?php

// Define a função de popup através de um echo para evitar erros
echo "<script>
    function popUp(mensagem, callback, estado) {
    if (estado) op = `combalao`
    else op = `triste`
    document.body.innerHTML +=  `<div class='modal-prim' onclick='this.remove()' id='modal-prim'>`+
                                `<div class='modal'>` +
                                    `<img src='img/professor`+op+`.png' style='all: unset;'>` +
                                    `<div class='centered' id='mensagem'></div>` +
                                `</div>` +
                                `</div>`
    document.getElementById(`mensagem`).innerHTML = mensagem
    if (callback) document.getElementsByClassName(`modal-prim`)[0].onclick = ``
    setTimeout(() => {
        document.getElementsByClassName(`modal-prim`)[0].remove()
        callback();
    }, 3000)
}</script>";

// Se os dados estiverem incorretos avisa através de um popup
if ($_GET["incorreto"]) {
        echo "
        <script>
        popUp('Nome ou senha<br>incorretos!')        
        </script>
        ";
    };
?>
</html>