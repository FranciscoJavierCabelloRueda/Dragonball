<?php
// Configuración de cabeceras para solicitudes desde cualquier origen (CORS)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
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
mysqli_set_charset($conexion, 'utf8mb4');

if (!$conexion) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al conectar a la base de datos']);
    exit;
}

// Aceptamos solo solicitudes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Decodifica los datos del cuerpo de la solicitud
$datos = json_decode(file_get_contents("php://input"), true);

// Completar campos opcionales
$datos['isDestroyed'] = isset($datos['isDestroyed']) ? (int) $datos['isDestroyed'] : 0;
$datos['description'] = isset($datos['description']) ? mb_convert_encoding($datos['description'], 'UTF-8', 'auto') : null;
$datos['image'] = isset($datos['image']) ? mb_convert_encoding($datos['image'], 'UTF-8', 'auto') : null;
$datos['deletedAt'] = isset($datos['deletedAt']) ? $datos['deletedAt'] : null;

// Prepara la consulta SQL
$consulta = $conexion->prepare("
    INSERT INTO planetas (id, name, isDestroyed, description, image, deleted_at)
    VALUES (?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name), isDestroyed = VALUES(isDestroyed), 
      description = VALUES(description), image = VALUES(image),
      deleted_at = VALUES(deleted_at)
");

$consulta->bind_param(
    "isisss",
    $datos['id'],
    $datos['name'],
    $datos['isDestroyed'],
    $datos['description'],
    $datos['image'],
    $datos['deletedAt']
);

if ($consulta->execute()) {
    http_response_code(201); // POST /api/planetas HTTP/1.1 200 OK
    echo json_encode(['success' => true, 'message' => 'Planeta grabado en la BBDD correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al grabar el planeta en la BBDD', 'details' => $consulta->error]);
}

$consulta->close();
$conexion->close();
