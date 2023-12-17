 <?php
header("Access-Control-Allow-Origin: *");

$_POST = json_decode(file_get_contents("php://input"), true);

if ($_POST["telefono"] == "acutuc" && $_POST["password"] == "acutuc") {
    $respuesta["usuario"] = "fulanico";
    $respuesta["mensaje"] = "Acceso correcto";
} else {
    $respuesta["mensaje"] = "Acceso incorrecto";
}

echo json_encode($respuesta);
?>