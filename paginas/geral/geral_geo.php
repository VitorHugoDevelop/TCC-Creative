<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location:../../login.php");
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
    <link rel="stylesheet" href="../../css/estilo_geo.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <title>CREATIVE</title>
</head>
<body>
    <div class="fundo">
        <div class="main">
            <header>Geografia</header>
            <h2>Qual palavra corresponde a figura?</h2>
            <div class="container ">
                <div class="row justify-content-center  ">
                    <div class="col-8">
                        <img id="palavra" class="img-responsive " src="" width="500px" height="200px">
                    </div>
                </div>
            </div>
            <div class="alternativas ">
                <div class="op1">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op1"style="background-image:''"></option>
                </div>
                <div class="op2 ">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op2"></option>
                </div>
                <div class="op3 ">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op3"style="background-image:''"></option>
                </div>
                <div class="op4 ">
                    <option onclick="jogo.clicar(this.innerHTML)" id="op4"></option>
                </div>
            </div>
            <div class="div_progress" style="width: 90%; margin:0 auto;">
                <div class="progress">
                    <div id="progress"class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
<script src="../../js/geral.js"></script>
<script src="../../js/common.js"></script>
</html>