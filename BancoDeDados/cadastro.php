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
        window.location.href='../cadastrar.php?campo=true';
        </script>";
    
        }else{
          if($logarray == $login){
            echo"<script language='javascript' type='text/javascript'>
            window.location.href='../cadastrar.php?jaexiste=true';
            </script>";
            die();
    
          }else{
            $query = "INSERT INTO usuarios (nome ,senha) VALUES ('$login','$senha')";
            $insert = mysqli_query($conn, $query);
    
            if($insert){
              echo"<script language='javascript' type='text/javascript'>
              window.location.href='../login.php?cadastrou=true'
              </script>";
            }else{
              echo"<script language='javascript' type='text/javascript'>
              window.location.href='../cadastrar.php?erro=true'
              </script>";
            }
          }
        }
?>