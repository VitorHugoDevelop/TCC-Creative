<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location:../../login.php");
    exit;
}
?>

<!-- //TODO NAT -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/estilo_port.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <title>portugues</title>
</head>

<body>
    <div class="fundo">
        <div class="main">
            <header></header>
            <h2>Qual a primeira letra dessa figura ?</h2>
            <div class="container ">
                <div class="row justify-content-center  ">
                    <div class="col-6">
                        <img id="palavra" class="img-responsive " src="../../img/abelha.png" width="300px" height="200px">
                    </div>
                </div>
            </div>
            <div class="alternativas ">
                <div class="op1">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op1">A</option>
                </div>
                <div class="op2 ">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op2">C</option>
                </div>
                <div class="op3 ">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op3">J</option>
                </div>
                <div class="op4 ">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op4">E</option>
                </div>
            </div>
            <progress max="100" id="progress"></progress>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
<script src="../../js/port.js"></script>
<script src="../../js/common.js"></script>
</html>