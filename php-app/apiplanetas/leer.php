<?php
// Configuración de cabeceras para solicitudes desde cualquier origen (CORS)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Configurar PHP para trabajar con UTF-8
mb_internal_encoding("UTF-8");
mb_http_output("UTF-8");
header('Content-Type: application/json; charset=UTF-8');

// Manejo del método OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configuración de la conexión a la base de datos
define("HOSTNAME", "mysql-db");
define("USERNAME", "root");
define("PASSWORD", "dejame");
define("DATABASE", "dbzDB");

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

if (!$conexion) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al conectar a la base de datos']);
    exit;
}

// Aceptamos solo solicitudes GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Prepara la consulta SQL
$consulta = $conexion->prepare("SELECT * FROM planetas");

if (!$consulta) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Error al preparar la consulta']);
    exit;
}

// Ejecutar la consulta
if (!$consulta->execute()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Error al ejecutar la consulta']);
    $consulta->close();
    $conexion->close();
    exit;
}

// Obtener resultados
$resultado = $consulta->get_result();
if (!$resultado) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Error al obtener los resultados']);
    $consulta->close();
    $conexion->close();
    exit;
}

// Convierte los datos en un array asociativo
$datos = $resultado->fetch_all(MYSQLI_ASSOC);
/* var_dump($datos); // Muestra los datos antes de enviarlos como JSON. Terminal: curl -i http://localhost:8080/apiplanetas/leer.php

// Si `var_dump` muestra datos pero la API sigue vacía, entonces el problema está en `echo json_encode()`
 */

// Convertir `isDestroyed` a booleano y demás datos a UTF-8
foreach ($datos as &$row) {
    foreach ($row as $key => $value) {
        if ($key === "isDestroyed") {
            $row[$key] = (bool) $value; // Convierte 0/1 a false/true
        } else {
            $row[$key] = mb_convert_encoding($value, 'UTF-8', 'auto'); // Convierte a UTF-8
        }
    }
}

 // Respuesta exitosa
http_response_code(200);
echo json_encode([
    'success' => true,
    'data' => $datos,
    'message' => 'Planetas cargados de la BBDD correctamente'
]);

// Cerrar conexiones
$consulta->close();
$conexion->close();
?>
