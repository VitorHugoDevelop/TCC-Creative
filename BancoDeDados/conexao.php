<?php 

    // Esse script só tem a função de reutilizar código, é responsável pela conexão


    $localhost = "localhost:3306";
    $user = "creative";
    $pass = "creativeBD555+";
    $conn = mysqli_connect($localhost, $user, $pass) or die ("Não foi possivel conectar")

?>