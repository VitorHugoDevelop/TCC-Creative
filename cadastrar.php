<?php
    setcookie('login', null, -1, "/");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../TCC-Creative/css/login.css">
    <title>Login</title>
</head>

<body>
    <div class="main">
        <h1>Cadastrar</h1>
        <div class="chao"></div>
        <div class="login">
            <form method="post" action="BancoDeDados/cadastro.php" class="formulario">
                <label>Digite Seu Nome</label>
                <input type="text" name="usuario">
                <label>Digite sua senha</label>
                <input type="password" name="senha">
                <input type="submit" Value="Cadastrar" class="botao">
            </form>
        </div>
        <div class="cadastrar">
            <div class="div-cad">
                <a href="login.php">Entrar</a>
            </div>
        </div>
    </div>
</body>

</html>