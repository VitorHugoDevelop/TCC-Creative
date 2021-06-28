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
    <link rel="stylesheet" href="../css/atividades.css">
</head>

<body>
    <div class="main">
        <header>Atividades</header>
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
                <a href="#">Jogos</a>
            </div>
        </div>
    </div>
</body>
<script src="../js/common.js"></script>

</html>