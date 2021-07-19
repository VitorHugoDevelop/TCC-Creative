<?php

// Verifica se o usuário está logado para evitar erros

session_start();
if(!isset($_COOKIE['login']))
{
    header("location: login.php");
    exit;
}
?>
<?php

    // Salva o progresso do usuário
    // Lê os cookies relacionados ao progresso e envia para o banco de dados
    // Isso garante que o progresso esteja sempre sincronizado
    // Juntamente com o script que carrega o progresso

    $progresso = new \stdClass();
    $nome = $_COOKIE['login'];
    if(isset($_COOKIE["MatProgFac"])) {
        $progresso->MatProgFac = true;
    }
    if(isset($_COOKIE["MatProgMed"])) {
        $progresso->MatProgMed = true;
    } 
    if(isset($_COOKIE["PortProgFac"])) {
        $progresso->PortProgFac = true;
    } 
    if(isset($_COOKIE["PortProgMed"])) {
        $progresso->PortProgMed = true;
    }
    $json = json_encode($progresso);
    include("conexao.php");
    
    // Envia um JSON para o campo progresso do BD

    $sql = "UPDATE usuarios  SET progresso='$json' WHERE nome='$nome'";

    $db = mysqli_select_db($conn, 'creative');
    if ($conn->query($sql) === TRUE) {
        $end = $_GET["vaipara"];
        header("Refresh:0 , url=../paginas/$end/niveis_$end.php");
      } else {
        echo "Erro: " . $conn->error;
      }
    

?>