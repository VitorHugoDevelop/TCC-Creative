<?php
    setcookie('login', null, -1, "/");
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
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
</body>

</html>