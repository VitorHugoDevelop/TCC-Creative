<?php
session_start();
if(!isset($_COOKIE['login']))
{
    header("location: ../../login.php");
    exit;
}
?>
<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/estilo_mat.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <title>CREATIVE</title>
</head>

<body>
    <div class="fundo">
        <div class="main ">
            <header>Matemática</header>
            <div class="container">
                <div class="row align-items-center">
                    <div id="1" class="col-5 ">
                        <img id="n1" class="img-responsive" src="" alt="3-maças" width="250px" height="150px">
                    </div>
                    <div id="2" class="col-2">
                        <h2 id="sinal"></h2>
                    </div>
                    <div id="3" class="col-5 ">
                        <img id="n2" class="img-responsive" src="" alt="3-maças" width="250px" height="150px">
                    </div>
                </div>
            </div>
            <div class="alternativas ">
                <div class="op1">
                    <option id="op1" onclick="jogo.clicar(Number(this.innerHTML))">10</option>
                </div>
                <div class="op2 ">
                    <option id="op2" onclick="jogo.clicar(Number(this.innerHTML))">20</option>
                </div>
                <div class="op3 ">
                    <option id="op3" onclick="jogo.clicar(Number(this.innerHTML))">30</option>
                </div>
                <div class="op4 ">
                    <option id="op4" onclick="jogo.clicar(Number(this.innerHTML))">4</option>
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
<script src="../../js/common.js"></script>
<script src="../../js/mat.js"></script>

</html>