<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location: ../../login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CREATIVE</title>
    <link rel="stylesheet" href="../../css/niveis.css">
</head>

<body>
    <div class="main">
        <header>Dificuldade</header>
        <div class="niveis">
            <a href="mat_facil.php" class="facil">Fácil</a>
            <a href="mat_medio.php" class="medio">Médio</a>
            <a href="mat_dificil.php" class="dificil">Difícil</a>
        </div>
    </div>
</body>
<script src="../../js/common.js"></script>
<script src="../../js/niveis.js"></script>

</html>