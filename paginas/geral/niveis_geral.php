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
    <link rel="stylesheet" href="../../css/niveis.css">
    <title>Gerais</title>
</head>

<body>
    <div class="main">
        <header>Atividades</header>
        <div class="niveis">
            <a href="geral_nat.php" class="facil" style="font-size:50px;">Natureza</a>
            <a href="geral_geo.php" class="medio" style="font-size:50px;" >Geografia</a>
        </div>
    </div>
</body>
<script src="../../js/common.js"></script>
</html>