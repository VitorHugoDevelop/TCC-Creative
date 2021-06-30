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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/niveis.css">
    <title>CREATIVE</title>
</head>

<body>
    <div class="main">
        <div class="row">
            <div class="col" align="center" onclick="window.history.back()">
            <img class="btnVolta" src="../../img/voltar.png" style="width: 50px; height: 50px;">
            </div>
            <div class="col-10">
            <header>Gerais</header>
        </div>
        <div class="niveis">
            <a href="geral_nat.php" class="facil" style="font-size:50px;">Natureza</a>
            <a href="geral_geo.php" class="medio" style="font-size:50px;" >Geografia</a>
        </div>
    </div>
</body>
<script src="../../js/common.js"></script>
</html>