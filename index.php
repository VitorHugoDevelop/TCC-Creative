<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location:login.php");
    exit;
}
include("BancoDeDados/crrgProg.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar-Creative</title>
    <link rel="stylesheet" href="css/style_iniciar.css">
</head>

<body>
    <div class="main">
        <div class="professor">
            <img src="img/professor.png">
        </div>
        <a href="paginas/atividade.php">Iniciar</a>
        <div class="balao">
            <img src="img/Balao_de_Fala_PNG_2 - Copia - Copia.png" alt="">
        </div>
        <div class="fala">
            <h3>Olá, Seja Bem Vindo ao Creative,<br> Vamos começar?</h3>
        </div>
        <div class="chao">
        </div>
    </div>
</body>
<script src="js/common.js"></script>

</html>