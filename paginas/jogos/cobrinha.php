<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location: ../../login.php");
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
    <link rel="stylesheet" href="../../css/atividades.css">
    <link rel="stylesheet" href="../../css/cobrinha.css">
</head>

<body>
    <div class="main">
        <header>Cobrinha</header>
        <h2>Pontos:<span id="score"> 0</span></h2>  
        <canvas id="Snake" width="512" height="512"></canvas>
    </div>
</body>
<script src="../../js/common.js"></script>
<script src="../../js/cobrinha.js"></script>
</html>