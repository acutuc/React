<?php
header("Access-Control-Allow-Origin");

$_POST = json_decode(file_get_contents("php://input"), true);

try {
    $conexion = new PDO("mysql:host=localhost;dbname=bd_react", "jose", "josefa", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
} catch (PDOException $e) {
    die($e->getMessage());
}

try{
    
    $consulta = "INSERT INTO usuarios ('telefono', 'nombre', 'password', 'saldo', 'tipo') VALUES (?, ?, ?, ?, ?, ?)";
    $sentencia = $conexion->prepare($consulta);

    $datos[] = $_POST["telefono"];
    $datos[] = $_POST["nombre"];
    $datos[] = $_POST["password"];
    $datos[] = $_POST["saldo"];
    $datos[] = $_POST["tipo"];

    $sentencia->execute($datos);

}catch (PDOException $e){
    die($e->getMessage());
}

?>