<?php
    setcookie('login', null, -1, "/");

    error_reporting (E_ALL ^ E_NOTICE);
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/modal.css">
    <title>Cadastro</title>
</head>

<body>
    <div class="main">
        <h1>Cadastrar</h1>
        <div class="chao"></div>
        <div class="login">
            <form method="post" action="BancoDeDados/cadastro.php" class="formulario">
                <label>Digite Seu Nome</label>
                <input placeholder="Nome" type="text" name="usuario">
                <label>Digite sua senha</label>
                <input placeholder="Senha" type="password" name="senha">
                <input type="submit" Value="Cadastrar" class="botao">
            </form>
        </div>
        <div class="cadastrar">
            <p>JÁ POSSUI UMA CONTA? ENTRE AGORA MESMO!</p>
            <div class="div-cad">
                <a href="login.php">Entrar</a>
            </div>
        </div>
    </div>
</body>
<?php
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

if ($_GET["jaexiste"]) {
        echo "
        <script>
        popUp('O usuário já existe! Tente outro nome')        
        </script>
        ";
    } else if ($_GET["campo"]) {
        echo "
        <script>
        popUp('O campo do nome deve ser preenchido!')        
        </script>
        ";
    } else if ($_GET["erro"]) {
        echo "
        <script>
        popUp('Não foi possível realizar o cadastro, tente outra vez!')        
        </script>
        ";
    };
?>
</html>