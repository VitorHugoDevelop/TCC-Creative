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
    <title>CREATIVE</title>
    <link rel="stylesheet" href="../../css/memoria.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>

<body>
    <div class="main">
        <header style="line-height:80px; padding-top:15px">Jogo da Memória</header>
        <div class="container" draggable="false">
            <div class="memoria" id="memoria" draggable="false">
                <div class="imagens" draggable="false">
                    <div class="row" draggable="false">
                        <div class="col-3">
                            <img data-valor=1 id=i0>
                        </div>
                        <div class="col-3">
                            <img data-valor=2 id=i1>
                        </div>
                        <div class="col-3">
                            <img data-valor=3 id=i2>
                        </div>
                        <div class="col-3">
                            <img data-valor=4 id=i3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <img data-valor=5 id=i4>
                        </div>
                        <div class="col-3">
                            <img data-valor=6 id=i5>
                        </div>
                        <div class="col-3">
                            <img data-valor=7 id=i6>
                        </div>
                        <div class="col-3">
                            <img data-valor=8 id=i7>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <img data-valor=9 id=i8>
                        </div>
                        <div class="col-3">
                            <img data-valor=10 id=i9>
                        </div>
                        <div class="col-3">
                            <img data-valor=11 id=i10>
                        </div>
                        <div class="col-3">
                            <img data-valor=12 id=i11>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <img data-valor=13 id=i12>
                        </div>
                        <div class="col-3">
                            <img data-valor=14 id=i23>
                        </div>
                        <div class="col-3">
                            <img data-valor=15 id=i14>
                        </div>
                        <div class="col-3">
                            <img data-valor=16 id=i15>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rodape">
                <div class="col">
                    <button id="btInicio" class="btn btn-primary btn-large">Iniciar</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="../../js/common.js"></script>
<script src="../../js/memoria.js"></script>
</html>