-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_loja
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cartao`
--

DROP TABLE IF EXISTS `cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartao` (
  `car_id` int NOT NULL AUTO_INCREMENT,
  `car_usuid` int DEFAULT NULL,
  `car_numero` varchar(16) DEFAULT NULL,
  `car_nome` varchar(255) DEFAULT NULL,
  `car_validade` varchar(10) DEFAULT NULL,
  `car_seguranca` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartao`
--

LOCK TABLES `cartao` WRITE;
/*!40000 ALTER TABLE `cartao` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `end_id` int NOT NULL AUTO_INCREMENT,
  `end_usuid` int DEFAULT NULL,
  `end_cep` varchar(45) DEFAULT NULL,
  `end_rua` varchar(255) DEFAULT NULL,
  `end_bairro` varchar(255) DEFAULT NULL,
  `end_cidade` varchar(255) DEFAULT NULL,
  `end_estado` varchar(2) DEFAULT NULL,
  `end_numero` varchar(10) DEFAULT NULL,
  `end_complemento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`end_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `pro_id` int NOT NULL AUTO_INCREMENT,
  `pro_nome` varchar(100) DEFAULT NULL,
  `pro_descricao` longtext,
  `pro_valor` decimal(10,2) DEFAULT NULL,
  `pro_desconto` decimal(10,2) DEFAULT '0.00',
  `pro_estoque` int DEFAULT '0',
  `pro_status` int DEFAULT '0',
  `pro_urlimagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Maçã Gala Kg','',25.55,0.00,50,0,'/assets/fruta_maca.png'),(2,'Pera Kg','',18.29,0.00,255,0,'/assets/fruta_pera.png'),(3,'Banana Kg','',7.99,5.00,64,0,'/assets/fruta_banana.png'),(4,'Caqui Kg','',10.00,2.00,45,0,'/assets/fruta_caqui.png'),(5,'Uva Terci Kg','',16.75,0.00,100,0,'/assets/fruta_uva.png'),(6,'Abacate Kg',NULL,28.12,0.00,12,0,'/assets/fruta_abacate.png'),(7,'Carambola Kg',NULL,12.25,0.00,0,0,'/assets/fruta_carambola.png'),(8,'Laranja Kg',NULL,20.00,0.00,16,0,'/assets/fruta_laranja.png'),(9,'Limão Kg',NULL,19.98,0.00,55,0,'/assets/fruta_limao.png'),(10,'Melancia Kg',NULL,5.67,0.00,32,0,'/assets/fruta_melancia.png'),(11,'Amora Kg',NULL,14.86,0.00,100,0,'/assets/fruta_amora.png'),(12,'Abacaxi Kg',NULL,19.52,2.50,123,0,'/assets/fruta_abacaxi.png');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usu_id` int NOT NULL AUTO_INCREMENT,
  `usu_mail` varchar(100) DEFAULT NULL,
  `usu_senha` varchar(100) DEFAULT NULL,
  `usu_nome` varchar(100) DEFAULT NULL,
  `usu_sobrenome` varchar(45) DEFAULT NULL,
  `usu_ativo` int DEFAULT NULL,
  `usu_admin` int DEFAULT NULL,
  PRIMARY KEY (`usu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usu@test.com','Senha12345','Usuário','Teste',1,0),(2,'Admin@teste.com','AdminSenha12345','Administrador','Admin',1,1),(3,'outro@teste.com','OutraSenha2025','José','da Silva',0,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-11 15:42:40
