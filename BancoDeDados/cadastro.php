<?php    
    $login = $_POST['usuario'];
    $senha = $_POST['senha'];
    include("conexao.php");
    $db = mysqli_select_db($conn, 'creative');
    $query_select = "SELECT nome FROM usuarios WHERE nome = '$login'";
    $select = mysqli_query($conn, $query_select);
    if (!$select) {
        printf("Error: %s\n", mysqli_error($conn));
        exit();
    }
    $array = mysqli_fetch_array($select);
    $logarray = $array['nome'];
    if($login == "" || $login == null){
        echo"<script language='javascript' type='text/javascript'>
        alert('O campo login deve ser preenchido');
        window.location.href='../cadastrar.php';
        </script>";
    
        }else{
          if($logarray == $login){
            echo"<script language='javascript' type='text/javascript'>
            alert('Esse login já existe');window.location.href='../cadastrar.php';
            </script>";
            die();
    
          }else{
            $query = "INSERT INTO usuarios (nome ,senha) VALUES ('$login','$senha')";
            $insert = mysqli_query($conn, $query);
    
            if($insert){
              echo"<script language='javascript' type='text/javascript'>
              alert('Usuário cadastrado com sucesso!');window.location.href='../login.php'
              </script>";
            }else{
              echo"<script language='javascript' type='text/javascript'>
              alert('Não foi possível cadastrar esse usuário');window.location.href='../cadastrar.php'
              </script>";
            }
          }
        }
?>