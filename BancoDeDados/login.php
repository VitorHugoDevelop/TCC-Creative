<?php

    // Faz o login
    // Recebe login e senha

    $login = $_POST['usuario'];
    $senha = $_POST['senha'];
    
    include("conexao.php");

    // Verifica os dados no BD e caso estejam certos faz o login e salva um cookie
    $db = mysqli_select_db($conn, 'creative');  
    $verifica = mysqli_query($conn, "SELECT * FROM usuarios WHERE nome = '$login' AND senha = '$senha'") or die("erro ao selecionar");
    if (mysqli_num_rows($verifica)<=0){
        echo
        "<script language='javascript' type='text/javascript'>
        window.location.href='../login.php?incorreto=true'
        </script>";
        die();
    }else{
        setcookie('login', $login, time()+31556926, "/");        
        header("Refresh:0 , url=../index.php");
    }
?>
