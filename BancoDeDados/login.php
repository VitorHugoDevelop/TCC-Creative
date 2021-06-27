<?php
    $login = $_POST['usuario'];
    $senha = $_POST['senha'];
    $sql = "SELECT nome FROM usuarios WHERE nome = '$login'";
    
    include("conexao.php");

    $db = mysqli_select_db($conn, 'creative');  
    $verifica = mysqli_query($conn,     "SELECT * FROM usuarios WHERE nome = '$login' AND senha = '$senha'") or die("erro ao selecionar");
    if (mysqli_num_rows($verifica)<=0){
        echo
        "<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos')
        window.location.href='../login.php'
        </script>";
        die();
    }else{
        setcookie('login', $login, time()+31556926, "/");        
        header("Refresh:0 , url=../index.php");
    }
?>
