-- 🔹 Eliminar la base de datos si ya existe
DROP DATABASE IF EXISTS dbzDB;

-- 🔹 Crear la base de datos con conjunto de caracteres UTF-8 completo
CREATE DATABASE dbzDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 🔹 Usar la base de datos recién creada
USE dbzDB;

-- ========================================
-- 🔹 TABLA: PERSONAJES
-- ========================================
DROP TABLE IF EXISTS personajes;

CREATE TABLE personajes (
  id INT AUTO_INCREMENT PRIMARY KEY,      -- ID único del personaje
  name VARCHAR(255) NOT NULL,             -- Nombre del personaje
  ki VARCHAR(255),                        -- Nivel de fuerza (KI)
  max_ki VARCHAR(255),                    -- Máximo KI
  race VARCHAR(255),                      -- Raza del personaje
  gender VARCHAR(50),                      -- Género del personaje
  description TEXT,                        -- Descripción del personaje
  image VARCHAR(500),                      -- URL de la imagen del personaje
  affiliation VARCHAR(255),                -- Afiliación del personaje
  deleted_at DATETIME DEFAULT NULL         -- Campo para eliminación lógica
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- 🔹 TABLA: PLANETAS
-- ========================================
DROP TABLE IF EXISTS planetas;

CREATE TABLE planetas (
  id INT AUTO_INCREMENT PRIMARY KEY,       -- ID único del planeta
  name VARCHAR(255) NOT NULL,              -- Nombre del planeta
  isDestroyed TINYINT(1) DEFAULT 0,        -- Estado del planeta (destruido o no)
  description TEXT,                         -- Descripción del planeta
  image VARCHAR(500),                       -- URL de la imagen del planeta
  deleted_at DATETIME DEFAULT NULL          -- Campo para eliminación lógica
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- 🔹 TABLA: USUARIOS
-- ========================================
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,      -- ID único del usuario
  username VARCHAR(255) NOT NULL UNIQUE,  -- Nombre de usuario único
  password VARCHAR(255) NOT NULL,         -- Contraseña hasheada
  nombre VARCHAR(255) NOT NULL,           -- Nombre real del usuario
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de creación del registro
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 🔹 Insertar un usuario de prueba (contraseña: "password")
INSERT INTO usuarios (username, password, nombre)
VALUES ('testuser', '$2b$12$8RI5Y9B49U.qCRI8wJLe5ewhI2nKYbPmevPeI9blhjIPEWZdge0WC', 'Usuario de prueba');

-- ========================================
-- 🔹 INSERTS DE PRUEBA
-- ========================================
INSERT INTO planetas (name, isDestroyed, description, image)
VALUES 
('Namek', 1, 'Planeta natal de los Namekianos. Escenario de importantes batallas y la obtención de las Dragon Balls de Namek.', 'https://dragonball-api.com/planetas/Namek_U7.webp'),
('Tierra', 0, 'Planeta principal donde se desarrolla la serie de Dragon Ball.', 'https://dragonball-api.com/planetas/Tierra_Dragon_Ball_Z.webp');

INSERT INTO personajes (name, ki, max_ki, race, gender, description, image, affiliation)
VALUES 
('Piccolo', '2000000', '500000000', 'Namekian', 'Male', 'Guerrero Z y mentor de Gohan.', 'https://dragonball-api.com/characters/picolo_normal.webp', 'Z Fighter'),
('Bulma', '0', '0', 'Human', 'Female', 'Genio científica y amiga de Goku.', 'https://dragonball-api.com/characters/bulma.webp', 'Z Fighter');
