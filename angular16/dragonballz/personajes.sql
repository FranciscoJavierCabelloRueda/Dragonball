-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql-db
-- Tiempo de generación: 11-02-2025 a las 12:21:27
-- Versión del servidor: 5.7.44
-- Versión de PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbzDB`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `ki` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `max_ki` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `race` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `gender` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `description` text COLLATE utf8_spanish2_ci,
  `image` varchar(500) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `affiliation` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `name`, `ki`, `max_ki`, `race`, `gender`, `description`, `image`, `affiliation`, `deleted_at`) VALUES
(1, 'Goku', '60000000', '90 Septillion', 'Saiyan', 'Male', 'El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misiÃ³n de conquistarla. Sin embargo, el caer por un barranco le proporcionÃ³ un brutal golpe que si bien casi lo mata, este alterÃ³ su memoria y anulÃ³ todos los instintos violentos de su especie, lo que lo hizo crecer con un corazÃ³n puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que Ã©l fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucciÃ³n de su planeta por parte de Freeza. MÃ¡s tarde, Kakarot, ahora conocido como Son Goku, se convertirÃ­a en el prÃ­ncipe consorte del monte Fry-pan y lÃ­der de los Guerreros Z, asÃ­ como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucciÃ³n en innumerables ocasiones, a pesar de no considerarse a sÃ­ mismo como un hÃ©roe o salvador.', 'https://dragonball-api.com/characters/goku_normal.webp', 'Z Fighter', NULL),
(2, 'Vegeta', '54000000', '19.84 Septillion', 'Saiyan', 'Male', 'PrÃ­ncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagÃ³nico, poco despuÃ©s decide rebelarse ante el Imperio de Freeza, volviÃ©ndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegarÃ­a a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, Ã©l es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihÃ©roe, a finalmente un hÃ©roe a lo largo del transcurso de la historia, convirtiÃ©ndose asÃ­ en el deuteragonista de la serie.', 'https://dragonball-api.com/characters/vegeta_normal.webp', 'Z Fighter', NULL),
(3, 'Piccolo', '2000000', '500.000.000', 'Namekian', 'Male', 'Es un namekiano que surgiÃ³ tras ser creado en los Ãºltimos momentos de vida de su padre, siendo su actual reencarnaciÃ³n. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciÃ©ndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A travÃ©s del tiempo, tambiÃ©n comenzÃ³ a tomarle cariÃ±o a su discÃ­pulo Son Gohan, a quien veÃ­a como una especie de \"vÃ¡stago\" y formando un lazo de amistad con este.', 'https://dragonball-api.com/characters/picolo_normal.webp', 'Z Fighter', NULL),
(4, 'Bulma', '0', '0', 'Human', 'Female', 'Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball, Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es hija del Dr. Brief y su esposa Panchy, hermana menor de Tights y una gran amiga de Son Goku con quien inicia la bÃºsqueda de las Esferas del DragÃ³n. En Dragon Ball Z tuvo a Trunks, primogÃ©nito de quien serÃ­a su esposo Vegeta, a su hija Bra[3] y su hijo adulto del tiempo alterno Trunks del Futuro Alternativo.', 'https://dragonball-api.com/characters/bulma.webp', 'Z Fighter', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
