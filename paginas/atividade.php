<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location: ../login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/atividades.css">
</head>

<body>
    <div class="main">
    <div class="row">
            <div class="col" align="center" onclick="window.history.back()">
            <img class="btnVolta" src="../img/voltar.png" style="width: 50px; height: 50px;">
            </div>
            <div class="col-10">
            <header style="font-size:70px;">Atividades</header>
        </div>
        <div class="atividades">
            <div class="matematica">
                <a href="mat/niveis_mat.php">Matemática</a>
            </div>
            <div class="portugues">
                <a href="port/niveis_port.php">Português</a>
            </div>
            <div class="geral">
                <a href="geral/niveis_geral.php">Gerais</a>
            </div>
            <div class="jogos">
                <a href="jogos/niveis_jogos.php">Jogos</a>
            </div>
        </div>
    </div>
</body>
<script src="../js/common.js"></script>

</html>