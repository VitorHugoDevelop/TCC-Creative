<?php

    // Recupera o progresso do usuário salvo no banco de dados
    // Recebe o nome de usuário

    include("conexao.php");
    $login = $_COOKIE['login'];
    $sql = "SELECT nome FROM usuarios WHERE nome = '$login'";
    $db = mysqli_select_db($conn, 'creative');  
    $query = mysqli_query($conn,"SELECT * FROM usuarios WHERE nome = '$login'") or die("erro ao selecionar");
    $res = $query->fetch_assoc();
    $fore = json_decode($res["progresso"]);

    // Carrega o progresso através de cookies
    if(isset($fore->MatProgFac)) {
        setcookie("MatProgFac", "true", time()+31556926 ,'/');
    } else {setcookie("MatProgFac", "", time()+31556926 ,'/');}
    if(isset($fore->MatProgMed)) {
        setcookie("MatProgMed", "true", time()+31556926 ,'/');
    } else {setcookie("MatProgMed", "", time()+31556926 ,'/');}
    if(isset($fore->PortProgFac)) {
        setcookie("PortProgFac", "true", time()+31556926 ,'/');
    } else {setcookie("PortProgFac", "", time()+31556926 ,'/');}
    if(isset($fore->PortProgMed)) {
        setcookie("PortProgMed", "true", time()+31556926 ,'/');
    } else {setcookie("PortProgMed", "", time()+31556926 ,'/');}
    
?>