-- MariaDB dump 10.18  Distrib 10.4.17-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: calathea
-- ------------------------------------------------------
-- Server version	10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='Categoria de los productos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Plantas Interior',NULL,NULL),(2,'Plantas Exteriores',NULL,NULL),(3,'Accesorios',NULL,NULL),(4,'Fertilizantes',NULL,NULL),(5,'Macetas',NULL,NULL),(6,'Deco',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_user`
--

DROP TABLE IF EXISTS `categories_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descrption` varchar(45) DEFAULT 'null',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de categoria de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_user`
--

LOCK TABLES `categories_user` WRITE;
/*!40000 ALTER TABLE `categories_user` DISABLE KEYS */;
INSERT INTO `categories_user` VALUES (1,'administrador'),(2,'cliente');
/*!40000 ALTER TABLE `categories_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='Tabal de ofertas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES (1,'15%',NULL,NULL),(2,'20%',NULL,NULL),(3,'30%',NULL,NULL),(4,'Sin promo',NULL,NULL);
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_offer_idx` (`id_offer`),
  KEY `fk-product-cat` (`id_categories`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COMMENT='Listado de Productos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'APHELANDRA - M 14','Aphelandra. Maceta N 14 / Maceta plástico Soplado / 25 cm. Interior / Exterior','interior/aphelandra.png',1,649,0,5,NULL,NULL,NULL,1),(2,'ASPIDISTRA - 3 LTS','Aspidistra. Maceta 3 Litros / Maceta plástico Soplado / 60cm (sin contar maceta). Exterior / Interio','interior/aspidistra.png',1,561,0,5,NULL,NULL,NULL,2),(3,'ASPLENIUM CRISPI - M12','Asplenium Crispi. Maceta n°12 / Maceta plástico Soplado / 25cm. Interior','interior/asplenium.png',1,897,0,5,NULL,NULL,NULL,3),(4,'CALATHEA MIL RAYAS - M14','Calathea mil rayas. Maceta n 14 / Maceta plástico Soplado /30cm (sin contar maceta). Interior','interior/calathea.jpg',1,666,0,5,NULL,NULL,NULL,4),(5,'CHAMADOREA - M14','Phoenix Robellini. Maceta n 14 / Maceta plástico Soplado / 40cm (sin contar maceta). Interior','interior/chamadorea.jpg',1,855,0,5,NULL,NULL,NULL,5),(6,'CORDATUM BRASILERO - M 14','Cordatum Brasilero. Maceta nro 14 / Maceta plástico Soplado / 25cm. Interior / Exterior','interior/cordatum.png',1,605,0,5,NULL,NULL,NULL,6),(7,'CROTON HIBRIDO - M 15','Croton Hibrido. Maceta n 15 / Maceta plástico Soplado / 25cm (sin contar maceta). Interior','interior/croton-hibrido.jpg',1,1053,0,5,NULL,NULL,NULL,7),(8,'FITTONIA - M 14','Fittonia.Maceta n 14 / Maceta plástico Soplado / 25cm. Interior / Exterior','interior/fittonia.png',1,946,0,5,NULL,NULL,NULL,8),(9,'JAZMIN GARDENIA AUGUSTA - 4LTS','Jazmin Gardenia Augusta. Maceta de 4 lts / Maceta plástico Soplado / 40cm (sin contar maceta). Inter','interior/jazmin.png',1,625,0,5,NULL,NULL,NULL,9),(10,'MARANTHA CTENANTHE - M12','Marantha Ctenanthe. Maceta n°12 / Maceta plástico Soplado / 25cm. Interior','interior/marantha.png',1,605,0,5,NULL,NULL,NULL,10),(11,'MONSTERA MISIONERA - 10 LTS','Monstera Misionera. Maceta 10 lts / Maceta plástico Soplado / 50cm. Interior / Exterior','interior/monstera.png',1,1680,0,5,NULL,NULL,NULL,11),(12,'PALO DE AGUA - 3 LTS','Palo de Agua. Maceta de 3 lts / Maceta plástico Soplado / 40/60cm (sin contar maceta). Interior','interior/palo-agua.jpg',1,1089,0,5,NULL,NULL,NULL,12),(13,'PEPEROMIA . M12','Peperomia. Maceta nro 12 / Maceta plástico Soplado / 15cm (sin contar maceta). Interior','interior/peperomia.jpg',1,525,0,5,NULL,NULL,NULL,13),(14,'PHILODENDRON ELEGANS - M14','Philodendro Elegans M14. Maceta nro 14 / Maceta plástico Soplado / 30/40cm (sin contar maceta). Plan','interior/philo-elegans.png',1,1140,0,5,NULL,NULL,NULL,14),(15,'COMBO PHILODENDRON ELEGANS M14 EN PREMIUM 18','Philodendron Elegans M14. Maceta Premium 18. Alto Combo: 40/50cm / Ancho Combo: 20/30 cm','interior/philo-dendron.png',1,1472,0,5,NULL,NULL,NULL,15),(16,'PHILODENDRON PERUBEANO - M 15','Philodendron Perubeano. Maceta nro 15 / Maceta plástico Soplado / 30/35cm. Interior / Exterior','interior/philo-perubeano.png',1,715,0,5,NULL,NULL,NULL,16),(17,'POTHUS CORDATUM LEMON COLGANTE B18','Cordatum Lemon. Maceta Bols 18 / Maceta plástico  / 15/20cm (sin contar maceta). Planta de Interior ','interior/pothus.png',1,1190,0,5,NULL,NULL,NULL,17),(18,'SANSEVIERIA EN PREMIUM 27 + PIE DE HIERRO DE 20CM ','Combo Sansevieria + Premium 27 + Pie de Hierro de 20 cm. Sansevieria 3 litros en maceta Premium nro ','interior/sansevieria.png',1,3044,0,5,NULL,NULL,NULL,18),(19,'SENDERIANA - M 17','Senderiana. Maceta nro 17 / Maceta plástico Soplado / 35cm. Interior / Exterior','interior/senderiana.png',1,759,0,5,NULL,NULL,NULL,19),(20,'TRADESCANTIA - M 12','Tradescantia. Maceta n 12 / Maceta plástico Soplado / 25cm. Interior / Exterior','interior/tradescantia.png',1,649,0,5,NULL,NULL,NULL,20),(21,'BUXUS ARBOLITO - 8LS','Buxus Bocha. Maceta de 8 litros / Maceta plástico Soplado / 60cm. Exterior','exterior/buxus-arbolito.png',1,1375,0,5,NULL,NULL,NULL,21),(22,'EUGENIA BOCHA - 10 LTS','Eugenia Bocha 10lts. Maceta de 10 litros / Maceta plástico Soplado / 50cm. Planta de Exterior','exterior/eugenia-bocha.png',2,1815,0,5,NULL,NULL,NULL,22),(23,'FORMIO BRONCE - 5 LTS','Formio Bronce. Maceta de 5 litros / Maceta plástico Soplado / 100cm. Exterior','exterior/formio-bronce.png',2,979,0,5,NULL,NULL,NULL,23),(24,'FORMIO VERDE - 10 LTS','Formio Verde. Maceta de 10 lts / Maceta plástico Soplado / 45cm (sin contar maceta). Exterior','exterior/formio-verde.jpg',2,1029,0,5,NULL,NULL,NULL,24),(25,'JAZMIN GARDENIA AUGUSTA - 10 LTS','Jazmin Gardenia Augusta. Maceta de 10 lts / Maceta plástico Soplado / 70cm (sin contar maceta). Exte','exterior/jazmin-gardenia.png',2,910,0,5,NULL,NULL,NULL,25),(26,'JUNCO - 5 LTS','Junco Efusus. Maceta de 5 litros / Maceta plástico Soplado / 60cm. Exterior','exterior/junco.png',2,495,0,5,NULL,NULL,NULL,26),(27,'LIGUSTRUM SINENSE - 30 LTS','Ligustrum Sinense 30lts. Maceta de 30 litros / Maceta plástico Soplado / 160cm de altura!. Planta de','exterior/ligustrum.png',2,2145,0,5,NULL,NULL,NULL,27),(28,'MONSTERA MISIONERA - 10 LTS','Monstera Misionera. Maceta 10 lts / Maceta plástico Soplado / 50cm. Interior / Exterior','exterior/monstera.png',2,1680,0,5,NULL,NULL,NULL,28),(29,'OREJA DE ELEFANTE - 10 LTS','Oreja de Elefante. Maceta 10 lts / Maceta plástico Soplado / 50-60 cm. Interior / Exterior','exterior/oreja-de-elefante.png',2,2750,0,5,NULL,NULL,NULL,29),(30,'PALMERA EXCELSA TRACHYCARPUS FORTUNEI - 30 LITROS','Trachycarpus Fortunei - Palmera Excelsa. Maceta 30 lts - Altura 140/150 cm. Planta de Exterior','exterior/palmera-excelsa.png',2,5489,0,5,NULL,NULL,NULL,30),(31,'PALMERA PINDO - 15 LITROS','Arecastrum ramonzifolia - Palmera Pindo. Maceta 15 lts - Altura 180/200 cm. Exterior','exterior/palmera-pindo.jpg',2,3135,0,5,NULL,NULL,NULL,31),(32,'PHOENIX ROBELLINI - 30 LTS','Phoenix Robellini. Maceta de 30 litros / Maceta plástico Soplado / 150cm (sin contar maceta). Exteri','exterior/phoenix.jpg',2,5693,0,5,NULL,NULL,NULL,32),(33,'PHOENIX ROBELLINI - 7 LITROS','Phoenix Robellini. Maceta de 7 litros / Maceta plástico Soplado / 40/50cm (sin contar maceta). Exter','exterior/phoenix-robellini.png',2,2035,0,5,NULL,NULL,NULL,33),(34,'PINO LIMON - 04 LTS','Pino Limon / Cupressus Lutea. Maceta de 4 litros / Maceta plástico Soplado / 30/40cm (sin contar mac','exterior/pino-limon.jpg',2,599,0,5,NULL,NULL,NULL,34),(35,'PALITA DE MANO - TRAMONTINA','Se utiliza las palitas anchas en actividades de horticultura, cultivo de frutas y jardinería princip','accesorios/palita-de-mano.jpeg',3,303,0,5,NULL,NULL,NULL,35),(36,'GUANTES TACTIL PARA JARDINERIA','GUANTES DE POLIÉSTER POLIURETANO. RECUBIERTOS EN PALMA Y DEDOS. DORSO AIREADO. IDEAL PARA TRABAJOS D','accesorios/guantes.jpg',3,290,0,5,NULL,NULL,NULL,36),(37,'RASTRILLO DE MANO - TRAMONTINA','Rastrillo de tres dientes soldado con mango madera. Piezas producidas en acero al carbono especial d','accesorios/rastrillo-de-mano.jpeg',3,308,0,5,NULL,NULL,NULL,37),(38,'TIJERA DE MANO KASTOR ECO','La tijera es apropiada pala la poda de arboles fructíferos, flores y plantas ornamentales. Lámina te','accesorios/tijera-mano.jpg',3,1333,0,5,NULL,NULL,NULL,38),(39,'FERTILIZANTE LIQUIDO FERTIFOX - FLORACION 200CC','Fertifox fertilizante líquido es ideal para fomentar la floración de todo tipo de plantas de interio','fertilizantes/fertifox-floracion.jpeg',4,396,0,5,NULL,NULL,NULL,39),(40,'FERTILIZANTE LIQUIDO FERTIFOX - CRECIMIENTO 200CC','Fertifox fertilizante líquido es ideal para fomentar el crecimiento de hojas, tallos y la floración ','fertilizantes/fertifox-potenciado.jpeg',4,396,0,5,NULL,NULL,NULL,40),(41,'FERTILIZANTE NITROFULL - 1 KG','Fertilizante Nitrofull  En presentación granulada que permite una disolución lenta con el riego. Ide','fertilizantes/ferti-nitrofull.jpg',4,414,0,5,NULL,NULL,NULL,41),(42,'FERTILIZANTE GRANULADO VITTA TRIPLE 15 - 1KG','Estimula el desarrollo del follaje, desarrolla los tejidos y mejora la sanidad de las flores y fruto','fertilizantes/granulado-vitta.jpeg',4,311,0,5,NULL,NULL,NULL,42),(43,'FERTILIZANTE LIQUIDO FERTIFOX - FOLLAJE 200CC','Fertifox fertilizante líquido es ideal para fomentar el crecimiento de hojas y tallos de todo tipo d','fertilizantes/liquido-fertifox.jpeg',4,396,0,5,NULL,NULL,NULL,43),(44,'LUSTRE VEGETAL - FERTIFOX','Resalta el color natural, da brillo y limpia tus plantas sin dañar !. Ideal para tener siempre hermo','fertilizantes/lustre-vegetal.jpg',4,659,0,5,NULL,NULL,NULL,44),(45,'JARDIN VERTICAL ROTOMOLDEO - 4 BOLSILLOS','Maceta Polietileno Rotomoldeado. Modelo: Jardin Vertical de 4 bolsillos. Medidas: 35x40 cm','macetas/jardin-vertical.jpg',5,3027,0,5,NULL,NULL,NULL,45),(46,'MACETA DE BARRO COMUN - NRO 14','Medidas: boca : 14 cm. Base : 9 cm. Alto : 14 CM. Peso : 640 gr','macetas/maceta-barro-comun.jpg',5,209,0,5,NULL,NULL,NULL,46),(47,'MACETA PLASTICO PREMIUM - NRO 27','Maceta de plástico. Modelo: Premium nro 27. Medidas: 27x27. Peso: 1.5kg','macetas/maceta-plastico-premium-blanca.jpg',5,1089,0,5,NULL,NULL,NULL,47),(48,'MACETA PLASTICO PREMIUM - NRO 22','Maceta de plástico. Modelo: Premium nro 22. Medidas: 22x22. Peso: 1.0kg','macetas/maceta-plastico-premium-negra.jpg',5,605,0,5,NULL,NULL,NULL,48),(49,'MACETA ROCIO - NRO 24','Maceta de plástico. Modelo: Rocio nro 24. Medidas: 24x17. Peso: 0.5kg. Colores: Negro, Blanco, Verde','macetas/maceta-rocio.jpg',5,297,0,5,NULL,NULL,NULL,49),(50,'MACETA ROTOMOLDEO CILINDRO - NRO 40','Maceta Polietileno Rotomoldeado. Modelo: Cilindro nro 40. Medidas: 40x40cm. Peso: 2.0kg. Colores: Ne','macetas/maceta-rotomoldeo-cilindro.jpg',5,3273,0,5,NULL,NULL,NULL,50),(51,'MACETA ROTOMOLDEO CONO RAYADO - 42 CM','Maceta Polietileno Rotomoldeado. Modelo: Cono Rayado nro 42. Medidas: 42x30. Peso: 2.0kg. Colores: G','macetas/maceta-rotomoldeo-cono.jpg',5,1969,0,5,NULL,NULL,NULL,51),(52,'MACETA ROTOMOLDEO CUBO - NRO 30','Maceta Polietileno Rotomoldeado. Modelo: Cubo nro 30. Medidas: 30x30. Peso: 1.5kg. Colores: Negro, B','macetas/maceta-rotomoldeo-cubo.jpg',5,1925,0,5,NULL,NULL,NULL,52),(53,'MACETA ROTOMOLDEO JARRON LISO - NRO 59','Maceta Polietileno Rotomoldeado. Modelo: Jarrón Liso nro 59. Medidas: 59x45. Peso: 4.5kg. Colores: N','macetas/maceta-rotomoldeo-jarron.jpg',5,4675,0,5,NULL,NULL,NULL,53),(54,'ALMOHADÓN PALMERA','Almohadon en lienzo grueso y estampado a mano con detalles de hojas de palmeras color naranja. Medid','deco/almohadon-palmera.jpg',6,1100,0,5,NULL,NULL,NULL,54),(55,'Altar Pirámide','Altar espejado para cargar tus piedra o simplemente como alhajero diario, de vidrio,confeccionado a ','deco/altar-piramide.jpg',6,1311,0,5,NULL,NULL,NULL,55),(56,'Canasto BeigeCanasto Beige','Canasto de fibras naturales con asas, combinado en color crudo y beige, ideal para interior.','deco/canasto-beige.jpg',6,2841,0,5,NULL,NULL,NULL,56),(57,'Canastos cuadrados','Por su forma cuadrada lo hace unico y diferente, Aportando la calidez que cualquier otro canasto red','deco/canasto-cuadrado.jpg',6,2220,0,5,NULL,NULL,NULL,57),(58,'Canasto Orange','Canasto de fibras naturales con asas de yute, combinado en color azul oscuro, crudo y naranja, ideal','deco/canasto-orange.jpg',6,2400,0,5,NULL,NULL,NULL,58),(59,'Florero / Terrario Ambar','Florero/Terrario de vidrio,confeccionado a mano con técnica Tiffany Medidas:Alto 20cm.Ancho 23cm. Ca','deco/florero-ambar.jpg',6,2898,0,5,NULL,NULL,NULL,59),(60,'Vela de Pitanga','Aroma frutal a Pitanga (fruta brasilera) en vaso de vidro color bombé. Duración: 90hrs aprox','deco/vela-pitanga.jpg',6,752,0,5,NULL,NULL,NULL,60),(61,'Vela de Roses','Aroma floral a rosas, en vaso de vidrio bombé. Duración: 90hrs aprox','deco/vela-roses.jpg',6,752,2,5,NULL,NULL,NULL,61),(62,'Oscar','prueba cambio','producto1616933589388.jpg',1,45,4,17,'2021-03-28 12:13:09','2021-03-28 21:39:36','2021-03-28 21:50:04',62),(63,'Kin','botella de agua','producto1616962607731.jpg',1,700,2,10,'2021-03-28 20:16:48','2021-03-28 20:16:48','2021-03-28 21:50:45',63),(64,'maceta copada','maceta de todos los colores que quieras','producto1616968665686.jpg',1,1000,1,12,'2021-03-28 21:56:59','2021-03-28 21:57:45','0000-00-00 00:00:00',64),(70,'nuevo','prueba cambio','producto1617040602017.jpg',1,34,1,4,'2021-03-29 17:47:50','2021-03-29 17:56:42','2021-03-29 17:56:57',65),(71,'nuevo rere','prueba cambio rere','producto1617040103167.jpg',1,34,4,4,'2021-03-29 17:48:23','2021-03-29 21:11:26',NULL,65),(72,'prueba','prueba','producto1617040490901.jpg',1,456,2,456,'2021-03-29 17:54:50','2021-03-29 17:54:50','2021-03-29 17:57:39',65),(74,'ultimo','prueba','producto1617042776744.jpg',1,12,1,12,'2021-03-29 18:32:56','2021-03-29 21:12:04',NULL,70),(75,'vvvvvvvvvvvvvvv','vvvvvvvvvvvvvvvvvv','producto1617044107283.jpg',1,34,1,345,'2021-03-29 18:55:07','2021-03-29 18:55:07',NULL,70),(76,'coco','okokok','producto1617051643483.jpg',6,0,1,0,'2021-03-29 21:00:43','2021-03-29 21:19:30',NULL,78),(77,'Gaston Gatti','prueba','producto1617052484742.jpg',2,78,4,0,'2021-03-29 21:14:44','2021-03-29 21:14:44',NULL,78),(78,'Carolina Garcia','1234','producto1617052577966.png',3,12345,1,12,'2021-03-29 21:16:18','2021-03-29 21:20:16',NULL,80);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT 'null',
  `last_name` varchar(50) DEFAULT 'null',
  `phone` varchar(20) DEFAULT 'null',
  `email` varchar(30) DEFAULT 'null',
  `image` varchar(45) DEFAULT 'null',
  `id_category` varchar(45) DEFAULT 'null',
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabal de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-29 18:24:30
