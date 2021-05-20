-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2021 a las 05:31:05
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `calathea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Categoria de los productos';

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Plantas Interior', NULL, NULL),
(2, 'Plantas Exteriores', NULL, NULL),
(3, 'Accesorios', NULL, NULL),
(4, 'Fertilizantes', NULL, NULL),
(5, 'Macetas', NULL, NULL),
(6, 'Deco', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories_user`
--

CREATE TABLE `categories_user` (
  `id` int(11) NOT NULL,
  `descrption` varchar(45) DEFAULT 'null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de categoria de usuarios';

--
-- Volcado de datos para la tabla `categories_user`
--

INSERT INTO `categories_user` (`id`, `descrption`) VALUES
(1, 'administrador'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `description` varchar(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabal de ofertas';

--
-- Volcado de datos para la tabla `offer`
--

INSERT INTO `offer` (`id`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '15%', NULL, NULL),
(2, '20%', NULL, NULL),
(3, '30%', NULL, NULL),
(4, 'Sin promo', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT 'null',
  `description` varchar(150) DEFAULT 'null',
  `image` varchar(45) DEFAULT 'null',
  `id_categories` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `id_offer` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Listado de Productos';

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_categories`, `price`, `id_offer`, `stock`, `createdAt`, `updatedAt`, `deletedAt`, `order`) VALUES
(1, 'APHELANDRA - M 14', 'Aphelandra. Maceta N 14 / Maceta plástico Soplado / 25 cm. Interior / Exterior', 'interior/aphelandra.png', 1, 649, 4, 5, NULL, '2021-05-19 22:38:31', NULL, 1),
(2, 'ASPIDISTRA - 3 LTS', 'Aspidistra. Maceta 3 Litros / Maceta plástico Soplado / 60cm (sin contar maceta). Exterior / Interio', 'interior/aspidistra.png', 1, 561, 4, 5, NULL, '2021-05-08 13:17:59', NULL, 2),
(3, 'ASPLENIUM CRISPI - M12', 'Asplenium Crispi. Maceta n°12 / Maceta plástico Soplado / 25cm. Interior', 'interior/asplenium.png', 1, 897, 4, 5, NULL, '2021-05-08 13:18:04', NULL, 3),
(4, 'CALATHEA MIL RAYAS - M14', 'Calathea mil rayas. Maceta n 14 / Maceta plástico Soplado /30cm (sin contar maceta). Interior', 'interior/calathea.jpg', 1, 666, 4, 5, NULL, '2021-05-08 13:18:09', NULL, 4),
(5, 'CHAMADOREA - M14', 'Phoenix Robellini. Maceta n 14 / Maceta plástico Soplado / 40cm (sin contar maceta). Interior', 'interior/chamadorea.jpg', 1, 855, 4, 5, NULL, '2021-05-08 13:18:14', NULL, 5),
(6, 'CORDATUM BRASILERO - M 14', 'Cordatum Brasilero. Maceta nro 14 / Maceta plástico Soplado / 25cm. Interior / Exterior', 'interior/cordatum.png', 1, 605, 4, 5, NULL, '2021-05-08 13:18:19', NULL, 6),
(7, 'CROTON HIBRIDO - M 15', 'Croton Hibrido. Maceta n 15 / Maceta plástico Soplado / 25cm (sin contar maceta). Interior', 'interior/croton-hibrido.jpg', 1, 1053, 4, 5, NULL, '2021-05-08 13:18:25', NULL, 7),
(8, 'FITTONIA - M 14', 'Fittonia.Maceta n 14 / Maceta plástico Soplado / 25cm. Interior / Exterior', 'interior/fittonia.png', 1, 946, 4, 5, NULL, '2021-05-08 13:18:30', NULL, 8),
(9, 'JAZMIN GARDENIA AUGUSTA - 4LTS', 'Jazmin Gardenia Augusta. Maceta de 4 lts / Maceta plástico Soplado / 40cm (sin contar maceta). Inter', 'interior/jazmin.png', 1, 625, 4, 5, NULL, '2021-05-08 13:18:48', NULL, 9),
(10, 'MARANTHA CTENANTHE - M12', 'Marantha Ctenanthe. Maceta n°12 / Maceta plástico Soplado / 25cm. Interior', 'interior/marantha.png', 1, 605, 4, 5, NULL, '2021-05-08 13:18:54', NULL, 10),
(11, 'MONSTERA MISIONERA - 10 LTS', 'Monstera Misionera. Maceta 10 lts / Maceta plástico Soplado / 50cm. Interior / Exterior', 'interior/monstera.png', 1, 1680, 4, 5, NULL, '2021-05-08 13:19:01', NULL, 11),
(12, 'PALO DE AGUA - 3 LTS', 'Palo de Agua. Maceta de 3 lts / Maceta plástico Soplado / 40/60cm (sin contar maceta). Interior', 'interior/palo-agua.jpg', 1, 1089, 4, 5, NULL, '2021-05-08 13:19:08', NULL, 12),
(13, 'PEPEROMIA . M12', 'Peperomia. Maceta nro 12 / Maceta plástico Soplado / 15cm (sin contar maceta). Interior', 'interior/peperomia.jpg', 1, 525, 4, 5, NULL, '2021-05-08 13:19:15', NULL, 13),
(14, 'PHILODENDRON ELEGANS - M14', 'Philodendro Elegans M14. Maceta nro 14 / Maceta plástico Soplado / 30/40cm (sin contar maceta). Plan', 'interior/philo-elegans.png', 1, 1140, 4, 5, NULL, '2021-05-08 13:19:22', NULL, 14),
(15, 'COMBO PHILODENDRON ELEGANS M14 EN PREMIUM 18', 'Philodendron Elegans M14. Maceta Premium 18. Alto Combo: 40/50cm / Ancho Combo: 20/30 cm', 'interior/philo-dendron.png', 1, 1472, 4, 5, NULL, '2021-05-08 13:19:27', NULL, 15),
(16, 'PHILODENDRON PERUBEANO - M 15', 'Philodendron Perubeano. Maceta nro 15 / Maceta plástico Soplado / 30/35cm. Interior / Exterior', 'interior/philo-perubeano.png', 1, 715, 4, 5, NULL, '2021-05-08 13:19:34', NULL, 16),
(17, 'POTHUS CORDATUM LEMON COLGANTE B18', 'Cordatum Lemon. Maceta Bols 18 / Maceta plástico  / 15/20cm (sin contar maceta). Planta de Interior ', 'interior/pothus.png', 1, 1190, 4, 5, NULL, '2021-05-08 13:19:41', NULL, 17),
(18, 'SANSEVIERIA EN PREMIUM 27 + PIE DE HIERRO DE 20CM ', 'Combo Sansevieria + Premium 27 + Pie de Hierro de 20 cm. Sansevieria 3 litros en maceta Premium nro ', 'interior/sansevieria.png', 1, 3044, 4, 5, NULL, '2021-05-08 13:19:49', NULL, 18),
(19, 'SENDERIANA - M 17', 'Senderiana. Maceta nro 17 / Maceta plástico Soplado / 35cm. Interior / Exterior', 'interior/senderiana.png', 1, 759, 4, 5, NULL, '2021-05-08 13:19:56', NULL, 19),
(20, 'TRADESCANTIA - M 12', 'Tradescantia. Maceta n 12 / Maceta plástico Soplado / 25cm. Interior / Exterior', 'interior/tradescantia.png', 1, 649, 4, 5, NULL, '2021-05-08 13:20:03', NULL, 20),
(21, 'BUXUS ARBOLITO - 8LS', 'Buxus Bocha. Maceta de 8 litros / Maceta plástico Soplado / 60cm. Exterior', 'exterior/buxus-arbolito.png', 1, 1375, 4, 5, NULL, '2021-05-08 13:20:21', NULL, 21),
(22, 'EUGENIA BOCHA - 10 LTS', 'Eugenia Bocha 10lts. Maceta de 10 litros / Maceta plástico Soplado / 50cm. Planta de Exterior', 'exterior/eugenia-bocha.png', 2, 1815, 4, 5, NULL, '2021-05-08 13:21:00', NULL, 22),
(23, 'FORMIO BRONCE - 5 LTS', 'Formio Bronce. Maceta de 5 litros / Maceta plástico Soplado / 100cm. Exterior', 'exterior/formio-bronce.png', 2, 979, 4, 5, NULL, '2021-05-08 13:21:05', NULL, 23),
(24, 'FORMIO VERDE - 10 LTS', 'Formio Verde. Maceta de 10 lts / Maceta plástico Soplado / 45cm (sin contar maceta). Exterior', 'exterior/formio-verde.jpg', 2, 1029, 4, 5, NULL, '2021-05-08 13:21:11', NULL, 24),
(25, 'JAZMIN GARDENIA AUGUSTA - 10 LTS', 'Jazmin Gardenia Augusta. Maceta de 10 lts / Maceta plástico Soplado / 70cm (sin contar maceta). Exte', 'exterior/jazmin-gardenia.png', 2, 910, 4, 5, NULL, '2021-05-08 13:21:16', NULL, 25),
(26, 'JUNCO - 5 LTS', 'Junco Efusus. Maceta de 5 litros / Maceta plástico Soplado / 60cm. Exterior', 'exterior/junco.png', 2, 495, 4, 5, NULL, '2021-05-08 13:21:21', NULL, 26),
(27, 'LIGUSTRUM SINENSE - 30 LTS', 'Ligustrum Sinense 30lts. Maceta de 30 litros / Maceta plástico Soplado / 160cm de altura!. Planta de', 'exterior/ligustrum.png', 2, 2145, 4, 5, NULL, '2021-05-08 13:21:28', NULL, 27),
(28, 'MONSTERA MISIONERA - 10 LTS', 'Monstera Misionera. Maceta 10 lts / Maceta plástico Soplado / 50cm. Interior / Exterior', 'exterior/monstera.png', 2, 1680, 4, 5, NULL, '2021-05-08 13:21:35', NULL, 28),
(29, 'OREJA DE ELEFANTE - 10 LTS', 'Oreja de Elefante. Maceta 10 lts / Maceta plástico Soplado / 50-60 cm. Interior / Exterior', 'exterior/oreja-de-elefante.png', 2, 2750, 4, 5, NULL, '2021-05-08 13:21:40', NULL, 29),
(30, 'PALMERA EXCELSA TRACHYCARPUS FORTUNEI - 30 LITROS', 'Trachycarpus Fortunei - Palmera Excelsa. Maceta 30 lts - Altura 140/150 cm. Planta de Exterior', 'exterior/palmera-excelsa.png', 2, 5489, 4, 5, NULL, '2021-05-08 13:21:46', NULL, 30),
(31, 'PALMERA PINDO - 15 LITROS', 'Arecastrum ramonzifolia - Palmera Pindo. Maceta 15 lts - Altura 180/200 cm. Exterior', 'exterior/palmera-pindo.jpg', 2, 3135, 4, 5, NULL, '2021-05-08 13:22:24', NULL, 31),
(32, 'PHOENIX ROBELLINI - 30 LTS', 'Phoenix Robellini. Maceta de 30 litros / Maceta plástico Soplado / 150cm (sin contar maceta). Exteri', 'exterior/phoenix.jpg', 2, 5693, 4, 5, NULL, '2021-05-08 13:22:31', NULL, 32),
(33, 'PHOENIX ROBELLINI - 7 LITROS', 'Phoenix Robellini. Maceta de 7 litros / Maceta plástico Soplado / 40/50cm (sin contar maceta). Exter', 'exterior/phoenix-robellini.png', 2, 2035, 4, 5, NULL, '2021-05-08 13:22:38', NULL, 33),
(34, 'PINO LIMON - 04 LTS', 'Pino Limon / Cupressus Lutea. Maceta de 4 litros / Maceta plástico Soplado / 30/40cm (sin contar mac', 'exterior/pino-limon.jpg', 2, 599, 4, 5, NULL, '2021-05-08 13:22:44', NULL, 34),
(35, 'PALITA DE MANO - TRAMONTINA', 'Se utiliza las palitas anchas en actividades de horticultura, cultivo de frutas y jardinería princip', 'accesorios/palita-de-mano.jpeg', 3, 303, 4, 5, NULL, '2021-05-08 13:22:51', NULL, 35),
(36, 'GUANTES TACTIL PARA JARDINERIA', 'GUANTES DE POLIÉSTER POLIURETANO. RECUBIERTOS EN PALMA Y DEDOS. DORSO AIREADO. IDEAL PARA TRABAJOS D', 'accesorios/guantes.jpg', 3, 290, 4, 5, NULL, '2021-05-08 13:22:57', NULL, 36),
(37, 'RASTRILLO DE MANO - TRAMONTINA', 'Rastrillo de tres dientes soldado con mango madera. Piezas producidas en acero al carbono especial d', 'accesorios/rastrillo-de-mano.jpeg', 3, 308, 4, 5, NULL, '2021-05-08 13:23:04', NULL, 37),
(38, 'TIJERA DE MANO KASTOR ECO', 'La tijera es apropiada pala la poda de arboles fructíferos, flores y plantas ornamentales. Lámina te', 'accesorios/tijera-mano.jpg', 3, 1333, 4, 5, NULL, '2021-05-08 13:23:13', NULL, 38),
(39, 'FERTILIZANTE LIQUIDO FERTIFOX - FLORACION 200CC', 'Fertifox fertilizante líquido es ideal para fomentar la floración de todo tipo de plantas de interio', 'fertilizantes/fertifox-floracion.jpeg', 4, 396, 4, 5, NULL, '2021-05-08 13:23:19', NULL, 39),
(40, 'FERTILIZANTE LIQUIDO FERTIFOX - CRECIMIENTO 200CC', 'Fertifox fertilizante líquido es ideal para fomentar el crecimiento de hojas, tallos y la floración ', 'fertilizantes/fertifox-potenciado.jpeg', 4, 396, 4, 5, NULL, '2021-05-08 13:23:27', NULL, 40),
(41, 'FERTILIZANTE NITROFULL - 1 KG', 'Fertilizante Nitrofull  En presentación granulada que permite una disolución lenta con el riego. Ide', 'fertilizantes/ferti-nitrofull.jpg', 4, 414, 4, 5, NULL, '2021-05-08 13:23:33', NULL, 41),
(42, 'FERTILIZANTE GRANULADO VITTA TRIPLE 15 - 1KG', 'Estimula el desarrollo del follaje, desarrolla los tejidos y mejora la sanidad de las flores y fruto', 'fertilizantes/granulado-vitta.jpeg', 4, 311, 4, 5, NULL, '2021-05-08 13:23:38', NULL, 42),
(43, 'FERTILIZANTE LIQUIDO FERTIFOX - FOLLAJE 200CC', 'Fertifox fertilizante líquido es ideal para fomentar el crecimiento de hojas y tallos de todo tipo d', 'fertilizantes/liquido-fertifox.jpeg', 4, 396, 4, 5, NULL, '2021-05-08 13:23:44', NULL, 43),
(44, 'LUSTRE VEGETAL - FERTIFOX', 'Resalta el color natural, da brillo y limpia tus plantas sin dañar !. Ideal para tener siempre hermo', 'fertilizantes/lustre-vegetal.jpg', 4, 659, 4, 5, NULL, '2021-05-08 13:23:51', NULL, 44),
(45, 'JARDIN VERTICAL ROTOMOLDEO - 4 BOLSILLOS', 'Maceta Polietileno Rotomoldeado. Modelo: Jardin Vertical de 4 bolsillos. Medidas: 35x40 cm', 'macetas/jardin-vertical.jpg', 5, 3027, 4, 5, NULL, '2021-05-08 13:24:01', NULL, 45),
(46, 'MACETA DE BARRO COMUN - NRO 14', 'Medidas: boca : 14 cm. Base : 9 cm. Alto : 14 CM. Peso : 640 gr', 'macetas/maceta-barro-comun.jpg', 5, 209, 4, 5, NULL, '2021-05-08 13:24:07', NULL, 46),
(47, 'MACETA PLASTICO PREMIUM - NRO 27', 'Maceta de plástico. Modelo: Premium nro 27. Medidas: 27x27. Peso: 1.5kg', 'macetas/maceta-plastico-premium-blanca.jpg', 5, 1089, 4, 5, NULL, '2021-05-08 13:24:13', NULL, 47),
(48, 'MACETA PLASTICO PREMIUM - NRO 22', 'Maceta de plástico. Modelo: Premium nro 22. Medidas: 22x22. Peso: 1.0kg', 'macetas/maceta-plastico-premium-negra.jpg', 5, 605, 4, 5, NULL, '2021-05-08 13:24:19', NULL, 48),
(49, 'MACETA ROCIO - NRO 24', 'Maceta de plástico. Modelo: Rocio nro 24. Medidas: 24x17. Peso: 0.5kg. Colores: Negro, Blanco, Verde', 'macetas/maceta-rocio.jpg', 5, 297, 4, 5, NULL, '2021-05-08 13:24:24', NULL, 49),
(50, 'MACETA ROTOMOLDEO CILINDRO - NRO 40', 'Maceta Polietileno Rotomoldeado. Modelo: Cilindro nro 40. Medidas: 40x40cm. Peso: 2.0kg. Colores: Ne', 'macetas/maceta-rotomoldeo-cilindro.jpg', 5, 3273, 4, 5, NULL, '2021-05-08 13:24:30', NULL, 50),
(51, 'MACETA ROTOMOLDEO CONO RAYADO - 42 CM', 'Maceta Polietileno Rotomoldeado. Modelo: Cono Rayado nro 42. Medidas: 42x30. Peso: 2.0kg. Colores: G', 'macetas/maceta-rotomoldeo-cono.jpg', 5, 1969, 4, 5, NULL, '2021-05-08 13:24:35', NULL, 51),
(52, 'MACETA ROTOMOLDEO CUBO - NRO 30', 'Maceta Polietileno Rotomoldeado. Modelo: Cubo nro 30. Medidas: 30x30. Peso: 1.5kg. Colores: Negro, B', 'macetas/maceta-rotomoldeo-cubo.jpg', 5, 1925, 4, 5, NULL, '2021-05-08 13:24:41', NULL, 52),
(53, 'MACETA ROTOMOLDEO JARRON LISO - NRO 59', 'Maceta Polietileno Rotomoldeado. Modelo: Jarrón Liso nro 59. Medidas: 59x45. Peso: 4.5kg. Colores: N', 'macetas/maceta-rotomoldeo-jarron.jpg', 5, 4675, 4, 5, NULL, '2021-05-08 13:24:53', NULL, 53),
(54, 'ALMOHADÓN PALMERA', 'Almohadon en lienzo grueso y estampado a mano con detalles de hojas de palmeras color naranja. Medid', 'deco/almohadon-palmera.jpg', 6, 1100, 4, 5, NULL, '2021-05-08 13:25:05', NULL, 54),
(55, 'Altar Pirámide', 'Altar espejado para cargar tus piedra o simplemente como alhajero diario, de vidrio,confeccionado a ', 'deco/altar-piramide.jpg', 6, 1311, 4, 5, NULL, '2021-05-02 16:07:03', NULL, 55),
(56, 'Canasto BeigeCanasto Beige', 'Canasto de fibras naturales con asas, combinado en color crudo y beige, ideal para interior.', 'deco/canasto-beige.jpg', 6, 2841, 4, 5, NULL, '2021-05-02 16:07:59', NULL, 56),
(57, 'Canastos cuadrados', 'Por su forma cuadrada lo hace unico y diferente, Aportando la calidez que cualquier otro canasto red', 'deco/canasto-cuadrado.jpg', 6, 2220, 4, 5, NULL, '2021-05-08 13:25:32', NULL, 57),
(58, 'Canasto Orange', 'Canasto de fibras naturales con asas de yute, combinado en color azul oscuro, crudo y naranja, ideal', 'deco/canasto-orange.jpg', 6, 2400, 4, 5, NULL, '2021-05-08 13:25:39', NULL, 58),
(59, 'Florero / Terrario Ambar', 'Florero/Terrario de vidrio,confeccionado a mano con técnica Tiffany Medidas:Alto 20cm.Ancho 23cm. Ca', 'deco/florero-ambar.jpg', 6, 2898, 4, 5, NULL, '2021-05-08 13:25:47', NULL, 59),
(60, 'Vela de Pitanga', 'Aroma frutal a Pitanga (fruta brasilera) en vaso de vidro color bombé. Duración: 90hrs aprox', 'deco/vela-pitanga.jpg', 6, 752, 4, 5, NULL, '2021-05-08 13:25:57', NULL, 60),
(61, 'Vela de Roses', 'Aroma floral a rosas, en vaso de vidrio bombé. Duración: 90hrs aprox', 'deco/vela-roses.jpg', 6, 752, 4, 5, NULL, '2021-05-19 01:09:46', NULL, 61),
(62, 'Oscar', 'prueba cambio', 'producto1616933589388.jpg', 1, 45, 4, 17, '2021-03-28 12:13:09', '2021-03-28 21:39:36', '2021-03-28 21:50:04', 62),
(63, 'Kin', 'botella de agua', 'producto1616962607731.jpg', 1, 700, 2, 10, '2021-03-28 20:16:48', '2021-03-28 20:16:48', '2021-03-28 21:50:45', 63),
(64, 'maceta copada', 'maceta de todos los colores que quieras', 'producto1616968665686.jpg', 1, 1000, 1, 12, '2021-03-28 21:56:59', '2021-03-28 21:57:45', '0000-00-00 00:00:00', 64),
(70, 'nuevo', 'prueba cambio', 'producto1617040602017.jpg', 1, 34, 1, 4, '2021-03-29 17:47:50', '2021-03-29 17:56:42', '2021-03-29 17:56:57', 65),
(71, 'nuevo rere', 'prueba cambio rere', 'producto1617040103167.jpg', 1, 34, 4, 4, '2021-03-29 17:48:23', '2021-03-29 21:11:26', '2021-04-24 13:06:53', 65),
(72, 'prueba', 'prueba', 'producto1617040490901.jpg', 1, 456, 2, 456, '2021-03-29 17:54:50', '2021-03-29 17:54:50', '2021-03-29 17:57:39', 65),
(74, 'ultimo', 'prueba', 'producto1617042776744.jpg', 1, 12, 1, 12, '2021-03-29 18:32:56', '2021-03-29 21:12:04', '2021-04-24 13:06:50', 70),
(75, 'vvvvvvvvvvvvvvv', 'vvvvvvvvvvvvvvvvvv', 'producto1617044107283.jpg', 1, 34, 1, 345, '2021-03-29 18:55:07', '2021-03-29 18:55:07', '2021-04-24 13:06:46', 70),
(76, 'coco', 'okokok', 'producto1617051643483.jpg', 6, 0, 1, 0, '2021-03-29 21:00:43', '2021-03-29 21:19:30', '2021-04-24 13:06:43', 78),
(77, 'Gaston Gatti', 'prueba', 'producto1617052484742.jpg', 2, 78, 4, 0, '2021-03-29 21:14:44', '2021-03-29 21:14:44', '2021-04-24 13:06:40', 78),
(78, 'Carolina Garcia', '1234', 'producto1617052577966.png', 3, 12345, 1, 12, '2021-03-29 21:16:18', '2021-03-29 21:20:16', '2021-04-24 13:06:38', 80),
(79, 'Messi', 'El mejor jugador de la historia', 'producto1619269578376.jpg', 2, 111, 2, 111, '2021-04-24 13:06:18', '2021-04-24 13:06:18', '2021-04-24 13:06:34', 111),
(80, 'h', 'El mejor jugador de la historia', 'producto1619276295221.jpg', 1, 10, 1, 6, '2021-04-24 14:58:15', '2021-04-24 21:34:34', '2021-05-08 13:20:31', 222),
(81, '', '', 'null', 1, 0, 1, 0, '2021-04-24 23:26:13', '2021-04-24 23:26:13', '2021-05-01 13:54:46', 0),
(82, 'ssssssss', 'sssssssssssssssssss', 'null', 2, 343444, 2, 44444, '2021-04-24 23:26:36', '2021-04-24 23:26:36', '2021-05-01 21:01:44', 0),
(83, 'sssssssssssssssssssssss', 'ssssssssssssssssssssssssssssssssssss', 'null', 1, 44444, 2, 2147483647, '2021-04-24 23:27:24', '2021-04-24 23:27:24', '2021-05-01 14:06:10', 2147483647),
(84, 'JORGEEEEEEEEE', 'ASFASFASDFASFASFASFASF', 'null', 3, 2147483647, 2, 2147483647, '2021-04-24 23:30:40', '2021-04-24 23:30:40', '2021-05-01 13:54:37', 2147483647),
(85, 'Lionel Andres MESSI EL MEJOR', 'HOLA HOLA HOLAaaaaaaaaaaaaaaaaaaaaaaaaaa', 'producto1619307206595.jpg', 1, 2147483647, 1, 2147483647, '2021-04-24 23:33:26', '2021-04-28 00:56:19', '2021-05-08 13:20:37', 2147483647),
(86, 'LIONELSITO EL MEJORRRRRRRRR', 'LIO MESSI EL MEJOR JUGADOR DE TODA LA HISTORIA', 'producto1619311504228.jpg', 1, 10, 1, 10, '2021-04-24 23:44:01', '2021-05-01 14:27:38', '2021-05-08 13:20:42', 10),
(87, 'UNA CAGADA DE PRODUCTO', 'PRODUCTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', 'producto1619566485169.jpg', 1, 2147483647, 1, 2147483647, '2021-04-27 23:34:45', '2021-04-28 22:01:36', '2021-05-01 13:21:35', 0),
(88, 'Nuevo Producto22222222222', 'Nuevo producto eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'producto1619903885694.jpg', 1, 1111111, 1, 111111111, '2021-05-01 21:18:05', '2021-05-01 21:18:14', '2021-05-01 21:18:21', 1111111),
(89, 'dddddddddddddddd', 'dddddddddddddddddddddddd', 'producto1619905078437.jpg', 0, 333, 1, 33333, '2021-05-01 21:37:58', '2021-05-01 21:37:58', '2021-05-01 22:02:40', 0),
(90, 'Carlitos Bala', 'Carlitos Bala, un tipazo!', 'producto1619905302296.jpg', 1, 3433, 1, 222, '2021-05-01 21:41:42', '2021-05-02 16:11:16', '2021-05-08 13:20:47', 222),
(91, 'ffffffffffffffffffffffff', 'fffffffffffffffffffffffffffffffffff', 'producto1619905401831.jpg', 1, 111, 3, 1111, '2021-05-01 21:43:21', '2021-05-01 21:43:21', '2021-05-01 22:13:21', 0),
(92, '333333333333333333333', '3333333333333333333333333333333333333333', 'producto1619906146124.jpg', 0, 444, 1, 3333, '2021-05-01 21:55:46', '2021-05-01 21:55:46', '2021-05-01 22:02:28', 0),
(93, 'Lionel Andres Messi', 'ssssssssssssssssssssssssss', 'producto1619907180531.jpg', 3, 22, 1, 2147483647, '2021-05-01 22:13:00', '2021-05-01 22:13:08', '2021-05-01 22:13:16', 0),
(94, '55555555555555555', '55555555555555555555', 'producto1619907219441.jpg', 4, 444, 2, 55555, '2021-05-01 22:13:39', '2021-05-01 22:13:39', '2021-05-01 22:13:44', 0),
(95, 'eeeeeeee', 'Celularrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'producto1619978086802.jpg', 6, 1, 4, 111, '2021-05-02 17:54:35', '2021-05-02 23:07:52', '2021-05-08 13:24:58', 0),
(96, 'Celular de mierda ', 'Celular de mierda por favor funcionaaaaaaaaaaaaaaaaaa', 'producto1620691080321.jpg', 6, 55555, 4, 1010, '2021-05-10 23:58:00', '2021-05-10 23:58:00', '2021-05-10 23:58:29', 0),
(97, 'PRODUCTOOOOOOOOOOOOOO', 'PRODUCTOOOOOOOOOOOOOOOOOOOOOOOO', 'producto1620859156170.jpg', 1, 111111, 1, 1111111, '2021-05-12 22:39:16', '2021-05-12 22:39:16', '2021-05-12 22:39:49', 0),
(98, 'Lio Messi', 'El mejor jugador de la historia del planeta', 'producto1621375717387.jpg', 6, 10, 1, 10, '2021-05-18 22:08:37', '2021-05-18 22:08:37', '2021-05-18 22:17:38', 0),
(99, 'Jorge', 'Celular de mierda por favor funcionaaaaaaaaaaaaaaaaaa', 'producto1621386187904.jpg', 1, 3333, 2, 3333, '2021-05-19 01:03:07', '2021-05-19 01:03:07', '2021-05-19 01:03:24', 0),
(100, 'Nuevo producto modificado', 'El productoooooooooo', 'producto1621461226851.jpg', 1, 222, 1, 222, '2021-05-19 21:53:46', '2021-05-19 21:54:06', '2021-05-19 21:54:15', 0),
(101, 'Nuevo Producto', 'Productoooooooooooooooooooooooo', 'producto1621463951987.jpg', 1, 10, 4, 10, '2021-05-19 22:39:11', '2021-05-19 22:39:11', '2021-05-19 22:44:16', 0),
(102, 'Leooo', 'fffffffffffffffffffffffffffffffff', 'producto1621480285737.jpg', 2, 4344, 1, 4444, '2021-05-20 03:11:25', '2021-05-20 03:11:44', '2021-05-20 03:12:00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT 'null',
  `last_name` varchar(50) DEFAULT 'null',
  `phone` varchar(20) DEFAULT 'null',
  `email` varchar(30) DEFAULT 'null',
  `image` varchar(45) DEFAULT 'null',
  `id_category` varchar(45) DEFAULT 'null',
  `password` varchar(150) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabal de usuarios';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `phone`, `email`, `image`, `id_category`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Pepinito', 'Pepinitoooooooooo', '88888888888', 'cripto@gmail.com', 'usuario1618407543907.jpg', '1', '$2a$10$egGo0PFkJ8VbG7hlDCzR3O7zpMrSV0nB.PdxWv', '2021-04-14 13:39:04', '2021-04-28 23:51:13', '2021-05-12 22:51:43'),
(2, 'Carolina', 'Garcia', '01162757140', 'caaroi@gmail.com', 'usuario1618408016606.jpg', '1', '$2a$10$zdTuLp5TOGiRaCBJpNQLVOFfSGfBp0gb9MhbXB', '2021-04-14 13:46:56', '2021-04-14 13:46:56', '2021-05-12 22:51:45'),
(3, 'isa', 'Paladea', '12', '12@12.com', 'usuario1619137400802.jpg', '1', '$2a$10$2rmOIHUOTwNU4X2NR4Gkb.Pt2vd3ViHWcGHKgM', '2021-04-23 00:23:21', '2021-04-23 00:23:21', '2021-05-01 21:04:04'),
(4, '12', '12', '12', 'prueba@gmail.com', 'usuario1619138736270.jpg', '1', '$2a$10$R9kgtFSGAEGC6dA9OmE4GOAK6PMDivribuYPKz', '2021-04-23 00:45:36', '2021-04-23 00:45:36', '2021-05-01 21:04:52'),
(5, 'prueba', 'prueba', '12', 'prueba2@gmail.com', 'usuario1619189625283.jpg', '1', '$2a$10$56IG4dW4F/o8NvoiDWg1EeCV8.zysWtOjb3SEx', '2021-04-23 14:54:02', '2021-04-23 14:54:02', '2021-05-12 22:51:48'),
(6, 'tru', 'tru', '1', '1@1.com', 'usuario1619193795856.jpg', '1', '$2a$10$Z.nKMjsHEEN0FHTLDXxJ5uQssUeTwMDpbC6.lV', '2021-04-23 16:03:16', '2021-04-23 16:03:16', '2021-05-12 22:51:50'),
(7, 'pepe', 'pepe', '1234', 'pepe@pepe.com', 'usuario1619194535008.jpg', '1', '$2a$10$bRzEOiMgGRDOw0Wgv0z8IO.x5Jkp4HLrbpPAuq', '2021-04-23 16:15:36', '2021-04-23 16:15:36', '2021-05-01 21:06:11'),
(8, '2', '2', '2', '2@2.com', 'usuario1619203574033.jpg', '1', '$2a$10$o5fV7CvKr9fFRRy7EfhJfOOqyhZ9vbQNfyND5mw5guoy0OyHN.UTK', '2021-04-23 18:46:14', '2021-04-23 18:46:14', '2021-05-12 22:51:52'),
(9, 'Andres', 'Iniesta', '1010101010', 'iniesta@gmail.com', 'usuario1619221526716.jpg', '1', '', '2021-04-23 23:45:26', '2021-04-28 22:52:46', '2021-05-12 22:52:01'),
(10, 'Lionel Andrés', 'Messi', '1010101010', 'leomessi@gmail.com', 'usuario1619273053706.jpg', '1', 'lionelmessi', '2021-04-24 14:04:13', '2021-04-28 22:59:15', '2021-05-12 22:52:04'),
(11, 'Jorge', 'Iniesta', '1010101010', 'jorge@jorge.com', 'usuario1619277155121.jpg', '1', '$2a$10$aiDS0UWKY7g4UpV4Ekic9ellSNwXFH9jChfHaq079SGKWCFWxE4nq', '2021-04-24 15:12:35', '2021-04-24 15:12:35', '2021-05-12 22:52:08'),
(12, 'Jorge', 'Iniesta', '1010101010', 'jorgejorge@jorge.com', 'usuario1619277499382.jpg', '1', '$2a$10$ZvXqFcozup5RWXIoB.3fR.h7FyDfQyIw56Pvr2pnxTcAjgx1WBvua', '2021-04-24 15:18:19', '2021-04-24 15:18:19', '2021-05-12 22:52:11'),
(13, 'Tomas', 'Marenco', '1010101010', 'marenco@gmail.com', 'usuario1619277536406.jpg', '1', '$2a$10$z/a391ydtpXMGVxrpPMq6Oz9ysRoj0.6aHQv4pD1UTuFRcQeC43Li', '2021-04-24 15:18:56', '2021-04-24 15:18:56', '2021-05-12 22:52:13'),
(14, 'Lucia', 'Saenz', '1010101010', 'lucia@gmail.com', 'usuario1619277737675.jpg', '1', '$2a$10$F4rkXV2xJiXwu.Pcrjz74Ou.DbKKw22J2b2zMPnM8K6eMybtqrhoq', '2021-04-24 15:22:17', '2021-04-24 15:22:17', '2021-05-12 22:52:16'),
(15, 'Lucia', 'Saenz', '1010101010', 'saenz@gmail.com', 'usuario1619277837665.jpg', '1', '$2a$10$Ak4eDJyjfuJzNd8tn0ZQbu14aXT6cXa/5g6pbyuC9kirCw0HJcqHy', '2021-04-24 15:23:57', '2021-04-24 15:23:57', '2021-05-12 22:52:18'),
(16, 'Cachete', 'Montiel', '1010101010', 'montiel@gmail.com', 'usuario1619279246102.jpg', '1', '$2a$10$ENtFACiY2sFbM.NREZQ9QObMqgDTMN.sQYsQm.Xb4KpVK9QdG4GV2', '2021-04-24 15:47:26', '2021-04-24 15:47:26', '2021-05-12 22:52:20'),
(17, 'Fernando', 'Cavenaghi', '1010101010', 'cavenaghi@gmail.com', 'usuario1619279347423.jpg', '1', '$2a$10$lHOfPBf9MdOXR0sbkC/PHemv1TXh0ckdG9/CMvSAwxsUgeUHuy6O2', '2021-04-24 15:49:07', '2021-04-24 15:49:07', '2021-05-12 22:52:23'),
(18, 'Matias', 'Suarez', '1010101010', 'msuarez@gmail.com', 'usuario1619279596548.jpg', '1', '$2a$10$Bmo1mGVRwriFW2Kv5PHYxu1/bGQlsCOr/XhJ1Y.hA0hZ6JfslaCMC', '2021-04-24 15:53:16', '2021-04-24 15:53:16', '2021-05-12 22:52:25'),
(19, 't', 'hola', '5555', 'tomi@gmail.com', 'usuario1619289234904.jpg', '1', '$2a$10$KKt.tpuvmNJM9cSWxDw82.jLooQfrruq53oJj3s8OXxCJ2UWDiODS', '2021-04-24 18:33:54', '2021-04-24 18:33:54', '2021-05-12 22:52:27'),
(20, 'Jorge', 'Hola', '2222222 ', 'mail@mail.com', 'usuario1619290554104.jpg', '1', '$2a$10$EdG5RCuYI/v764/eepCx0.Qt6r7OKLNrZe85hhT7s7fHTjTaNKlIC', '2021-04-24 18:55:54', '2021-04-24 18:55:54', '2021-05-12 22:52:30'),
(21, 'Uusario', 'Nuevo', '333333', 'usuario@gmail.com', 'usuario1619290605401.jpg', '1', '$2a$10$r8nJN/TZzG91n4EUPNgSdO13GTyhaZgKN1.5GbkCZjpv12GZQVy1q', '2021-04-24 18:56:45', '2021-04-24 18:56:45', '2021-05-12 22:52:32'),
(22, 'Jorge', 'Jorge', '153251679', 'jorge@mail.com', 'usuario1619290792196.jpg', '1', '$2a$10$r/rR9uaOIId6UVj2HTWOnOosWIzxI3/3U3h.3QaEfOafti2g4Y3z2', '2021-04-24 18:59:52', '2021-04-24 18:59:52', '2021-05-12 22:52:36'),
(23, 'Leo ', 'Messi', '1111111111', 'lionelmessi@gmail.com', 'usuario1619304783281.jpg', '1', '$2a$10$0WOjfRAUJkK1pIzKcP42muUqbYVXp1fiNwdiVxdvT/kHMHKLlNoAG', '2021-04-24 22:53:03', '2021-04-24 22:53:03', '2021-05-12 22:52:39'),
(24, 'Usuario', 'de mierda', '2222222222222222', 'usuarionuevo@gmail.com', 'usuario1619566385304.jpg', '1', '$2a$10$ibBrh10.stYluciYi5Q.juQ1Q/cv0Oppjxn1MW2mmw3r8IVnUuClG', '2021-04-27 23:33:05', '2021-04-27 23:33:05', '2021-05-12 22:52:41'),
(25, 'Carlos', 'Bala', '151515151515', 'carlitosbala@gmail.com', 'usuario1619645449307.jpg', '1', '', '2021-04-28 21:30:49', '2021-04-28 22:55:38', '2021-05-12 22:52:51'),
(26, 'fffffffff', 'ffffff', '333333333', 'botella@gmail.com', 'usuario1619648927710.jpg', '1', '$2a$10$QvDhOvmA3dpFSUcv6EfRt.l0FlNr4KI8RMDnczYa/oW2mKOQRiYI.', '2021-04-28 22:28:47', '2021-04-28 22:28:47', '2021-05-12 22:52:54'),
(27, 'Carlitos', 'Bala', '01535167954', 'carlitos@gmail.com', 'usuario1619650962258.jpg', '1', '', '2021-04-28 23:02:42', '2021-04-28 23:04:11', '2021-05-12 22:52:56'),
(28, 'Mirtha', 'Legrand', '888888888888', 'mirtha@legrand.com', 'usuario1619651293473.jpg', '1', '$2a$10$RR0VUKZf7W49.FlUIRvbq.Tsm9IK.4b7DZB3QdkipImifrg2l3ZxK', '2021-04-28 23:08:13', '2021-04-28 23:08:13', '2021-05-12 22:52:59'),
(29, 'Pepinito', 'Pepinitoooooooooo', '88888888888', 'cripto@gmail.com', 'usuario1619651435370.jpg', '1', '$2a$10$X21AiiVzZRbxbsMAJKEB4e3a4kQAFiZ52oP8XqDPAepqUSTC.o68a', '2021-04-28 23:10:35', '2021-04-28 23:50:03', '2021-05-03 22:22:36'),
(30, 'Leo', 'Messi', '1515151515', 'leomessi@hotmail.com', 'usuario1619816092564.jpg', '1', 'Lionel10!!', '2021-04-30 20:54:52', '2021-05-02 17:52:58', '2021-05-12 22:53:02'),
(31, 'Edinson', 'Cavani', '15151515', 'cavani@gmail.com', 'usuario1619816945667.jpg', '1', '$2a$10$S7HZ.oZMTOEfiKrDMEy4b.X3Ro6YUgRf54y6LE.ts5yQUwe9Q.rVq', '2021-04-30 21:09:05', '2021-05-02 18:03:29', '2021-05-12 22:53:07'),
(32, 'Leo', 'Messi', '10101010101', 'liomessi@gmail.com', 'usuario1619999652523.jpg', '1', '$2a$10$UN3yAjUxclkrzZJxUFXdSexTzRF3qerf3fjDfqA9MRv8BSzlgON5e', '2021-05-02 18:07:49', '2021-05-20 03:12:54', NULL),
(33, 'Carlitos', 'Bala', '15151515151', 'carlitosbala@hotmail.com', 'usuario1619979009093.jpg', '2', '$2a$10$aXZObV2V6TuyGgwLSHFszuvgc.B2C88QRKgbybingF/8YeG.dfMo6', '2021-05-02 18:10:09', '2021-05-02 18:11:42', '2021-05-18 22:21:54'),
(34, 'Atiende ', 'Boludos', '11111111111111', 'atiendeboludos@gmail.com', 'usuario1619980015494.jpg', '2', '$2a$10$MRaWExtm7KnsxXrY5ccj7ujBQtMpLNt5OY6fmSV..vCjWjd4vCTVG', '2021-05-02 18:26:55', '2021-05-02 18:26:55', '2021-05-02 18:59:11'),
(35, 'Dotor', 'Bisman', '8888888888888', 'dotorbisman@gmail.com', 'usuario1619980340473.jpg', '2', '$2a$10$x.Gp6dE.dckMde5RMgpDvuph.QYtmmyiz9HULztONAJWYVzfXR9tS', '2021-05-02 18:32:20', '2021-05-02 18:32:20', '2021-05-02 18:59:07'),
(36, 'Bisman', 'Bisman', '33333333333', 'bisman@bisman.com', 'usuario1619980657694.jpg', '2', '$2a$10$qkACGVQnlDqEFxAD9yqyG.bpLDfdDmpfGJKba5f3166vwIBtWIclO', '2021-05-02 18:37:37', '2021-05-02 18:37:37', '2021-05-02 18:59:04'),
(37, 'ssssssssssssssss', 'sssssssssssssssssssss', '555555555555555', 'prueba@gmail.com', 'usuario1619980851400.jpg', '2', '$2a$10$nmFKi5mHeLrI9O8SSuzTCuYcnfJOkjlVB40KX7UxLdwouWQA83fnS', '2021-05-02 18:40:51', '2021-05-02 18:40:51', '2021-05-02 18:59:00'),
(38, 'Dotorr', 'Bisman', '555555555555', 'bisman@dotor.com', 'usuario1619981243560.jpg', '2', '$2a$10$p/4yYQOBW3VuDKHYb.kd2uEWLgGK5VIaetuuFzzXesbLlDVcKnRRe', '2021-05-02 18:47:23', '2021-05-02 18:47:23', '2021-05-02 18:58:56'),
(39, 'gggggggggggggg', 'ggggggggggggggggg', '44444444444', 'g@g.com', 'usuario1619981331611.jpg', '2', '$2a$10$zx5/SzkLk4b.Lx9PWeC51upoPZMT1kYoHThvXQbAk06f1nrbpkfZi', '2021-05-02 18:48:51', '2021-05-02 18:48:51', '2021-05-02 18:58:51'),
(40, 'Jorge', 'Messi', '00000000000000', 'jorgelin@gmail.com', 'usuario1619981576569.jpg', '2', '$2a$10$zkajruIWsGh/qT93rtvMVuVgU2zIgzQDI4zsldCoX14uEVxc6TQ.6', '2021-05-02 18:52:56', '2021-05-02 18:52:56', '2021-05-02 18:58:47'),
(41, 'Lio', 'Messi', '555555555555555', 'messi@gmail.com', 'usuario1619982635982.jpg', '1', '$2a$10$BJ.atuOiupa6tA53huL34ehHtpQDLFa5OSK1BowWU2MCxw3LH2Ji6', '2021-05-02 19:10:36', '2021-05-02 19:12:18', '2021-05-02 19:13:19'),
(42, 'AAAAAAAAAAAAAA', 'SAAAAAAAA', '333333333333', 'email@valido.com', 'usuario1619997631739.jpg', '2', '$2a$10$1nO3WYn7GcTtLrLFLGw5TO.pnfO8nfy5VLmR.EVaP94DYp6lEPjxe', '2021-05-02 23:20:31', '2021-05-02 23:20:31', '2021-05-12 22:53:15'),
(43, 'Jorge', 'Hernandez', '55555555555', 'xavi@hotmail.com', 'usuario1620080747613.jpg', '2', '$2a$10$X1mJk./1Wr66KLNDZAR26eRISr8/Sn20/y.FR2oPmN5RGrb3pf5vW', '2021-05-03 22:25:47', '2021-05-04 00:07:18', '2021-05-12 22:53:11'),
(44, 'uuuuuuuuuuuu', 'hhhhhhhhhhhhhhhhhhh', '5555555555555', 'hola@gmail.com', 'usuario1620861179707.jpg', '2', '$2a$10$NIOMwq2WVnF/JcThi/QgD.gUI1lnrlWkisvPVNjH8n57s8D2Agrp.', '2021-05-12 23:12:59', '2021-05-12 23:13:31', '2021-05-12 23:42:20'),
(45, 'Usuario', 'De Prueba', '2222222222', 'user@gmail.com', 'usuario1621032242029.jpg', '2', '$2a$10$kudvcpmIjf4LmQpjYkNg8./uqsWfVOl8VnlsIMw8b0yEwAvgePgPq', '2021-05-14 22:44:02', '2021-05-14 22:46:58', '2021-05-14 23:13:41'),
(46, 'Tomás', 'Marenco', '1535167954', 'tmarencocastello@gmail.com', 'usuario1621033739390.jpeg', '1', '$2a$10$ZoHbb4MqUiutKWyUaLHYseNz0KVsIrHFsiNdR7TBrR3o/m2od9jY6', '2021-05-14 23:07:04', '2021-05-14 23:08:59', NULL),
(47, 'Irina', 'Leicach', '1551019007', 'iru.leicach@gmail.com', 'usuario1621034013659.png', '1', '$2a$10$4K.wDkVmaI0xi9.1K3PW3uVp2j4E30WyxbqivsO3GDYK/LgDczsnG', '2021-05-14 23:13:33', '2021-05-14 23:13:33', NULL),
(48, 'Gaston', 'Gatti', '1563060560', 'gastongatti@gmail.com', 'usuario1621034209140.png', '1', '$2a$10$O4OjrhgilCDvco9szU0Sv.FcDlzyFD9dOU7aRC5k5f9mr7pvbuIv6', '2021-05-14 23:16:49', '2021-05-14 23:16:49', NULL),
(49, 'Jorge', 'gfgggggggggggg', '5555555555555', 'correo@gmail.com', 'usuario1621375256687.jpg', '2', '$2a$10$.czfEdxUzE4BwKcjVsRHruz6y2X.b7ZDFyNlnoWgvyvSw0upgLUT6', '2021-05-18 21:59:57', '2021-05-18 22:03:43', '2021-05-18 22:04:47'),
(50, 'Nuevo', 'Usuario Admin', '444444444444', 'admin@gmail.com', 'usuario1621375562842.jpg', '1', '$2a$10$k7I12YlYOpCCkgbSEhR5iumUvEiqbpwE649SmuB130jBsXqy7PEdC', '2021-05-18 22:06:02', '2021-05-18 22:06:02', '2021-05-18 22:07:12'),
(51, 'ggggggggggggggggggg', 'gggggggggggggggggg', '4444444444', 'hola@hola.com', 'usuario1621376430546.jpg', '1', '$2a$10$C3UPPk9ZanskF5FKX7IKu.e.4O8LJWLHkTQ7P1pWij4JowW2Y.E4K', '2021-05-18 22:20:30', '2021-05-18 22:20:30', '2021-05-18 22:21:25'),
(52, 'Cambio', 'Contraseña', '55555555555555555555', 'pw@gmail.com', 'usuario1621377785215.jpg', '2', '$2a$10$fVoEoljEWNfMV0zPJja2zude1uLpS4jCS1ogseS9T2eiKellIV/.G', '2021-05-18 22:43:05', '2021-05-19 00:58:30', '2021-05-19 01:00:18'),
(53, 'Cambio2', 'Contraseña', '555555555555555', 'pw2@gmail.com', 'usuario1621377948464.jpg', '2', '$2a$10$z.bqXV/hiQh9wu1ynWnfSOLx73rHbgiLE2p.1N6wmS0bL2lWdKQPy', '2021-05-18 22:45:48', '2021-05-19 00:59:20', '2021-05-19 01:00:15'),
(54, 'Jorge', 'Contraseña', '4444444444444', 'admin@hotmail.com', 'usuario1621386131516.jpg', '1', '$2a$10$xNu8r9LKVhY0dUaoGtDxuOPI1mgdcrY6Wvij54rmsVUSmM8Ftdwby', '2021-05-19 01:02:11', '2021-05-19 01:02:11', '2021-05-19 01:02:26'),
(55, 'Usuario', 'El USUARIO', '55553455', 'hola@hola.com', 'usuario1621461285048.jpg', '1', '$2a$10$Vla3qgPqqgUmiuvZsewFFuQUI1K69JrfOlvceBAQNE6KoFMx8tn7a', '2021-05-19 21:54:45', '2021-05-19 21:54:45', '2021-05-19 21:54:53'),
(56, 'Nuevo', 'De mierda', '5345634534', 'usuario@gmail.com', 'usuario1621461435153.jpg', '2', '$2a$10$dIhYWQq5VWgnmXclF34emu9jhwR93YtQeyFdKdAKc1vF./xhcBxtG', '2021-05-19 21:57:15', '2021-05-19 21:57:37', '2021-05-19 21:57:59'),
(57, 'Lionel', 'Messi', '45454545454', 'nuevo@usuario.com', 'usuario1621464065028.jpg', '2', '$2a$10$2qleBqh1sYvk2s3bbybm4ukCGNVyyhRIxPrOzwCsp6mRmHJBZsynC', '2021-05-19 22:41:05', '2021-05-19 22:41:37', '2021-05-20 03:10:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories_user`
--
ALTER TABLE `categories_user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_offer_idx` (`id_offer`),
  ADD KEY `fk-product-cat` (`id_categories`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `categories_user`
--
ALTER TABLE `categories_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
