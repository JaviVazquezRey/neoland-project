-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 21, 2018 at 10:20 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `neoland`
--
DROP DATABASE IF EXISTS `neoland`;
CREATE DATABASE IF NOT EXISTS `neoland` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `neoland`;

-- --------------------------------------------------------

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `matricula` varchar(5) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nota-media` float UNSIGNED NOT NULL,
  `edad` int(2) NOT NULL,
  `fk_escuela` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `matricula`, `email`, `nota-media`, `edad`, `fk_escuela`) VALUES
(3, 'Juan Antonio', 'A123', 'baxone@gmail.com', 9, 36, 1),
(4, 'Javi Vázquez', 'A122', 'j.vazquezrey@hotmail.com', 8.5, 24, 1),
(5, 'Clara', 'A155', 'clara@hotmail.com', 6, 25, 2),
(6, 'Tony Calderón', 'A133', 'tonycalderon@hotmail.com', 9, 26, 2),
(7, 'Guillermo', 'A144', 'guillermo@hotmail.com', 7.5, 40, 1);

-- --------------------------------------------------------

--
-- Table structure for table `alumnoscursos`
--

DROP TABLE IF EXISTS `alumnoscursos`;
CREATE TABLE `alumnoscursos` (
  `id` int(11) NOT NULL,
  `fk_alumnos` int(11) NOT NULL,
  `fk_cursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alumnoscursos`
--

INSERT INTO `alumnoscursos` (`id`, `fk_alumnos`, `fk_cursos`) VALUES
(1, 3, 3),
(2, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `titulo-curso` varchar(60) NOT NULL,
  `numero-horas` int(5) UNSIGNED NOT NULL,
  `convocatoria` enum('primera','segunda','tercera','cuarta') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `titulo-curso`, `numero-horas`, `convocatoria`) VALUES
(2, 'Javascript', 100, 'primera'),
(3, 'MySQL', 20, 'segunda'),
(4, 'UX-UI', 150, 'tercera'),
(5, 'Design Thinking', 80, 'primera');

-- --------------------------------------------------------

--
-- Table structure for table `escuela`
--

DROP TABLE IF EXISTS `escuela`;
CREATE TABLE `escuela` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `direccion` text NOT NULL,
  `localidad` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `escuela`
--

INSERT INTO `escuela` (`id`, `nombre`, `direccion`, `localidad`) VALUES
(1, 'Neoland Madrid', 'Plaza de España, 11', 'Madrd'),
(2, 'Neoland Barcelona', 'Carrer del Prats, 25', 'Barcelona');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_escuela` (`fk_escuela`);

--
-- Indexes for table `alumnoscursos`
--
ALTER TABLE `alumnoscursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cursos` (`fk_cursos`),
  ADD KEY `fk_alumnos` (`fk_alumnos`);

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `escuela`
--
ALTER TABLE `escuela`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `alumnoscursos`
--
ALTER TABLE `alumnoscursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `escuela`
--
ALTER TABLE `escuela`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `escuelaalumno` FOREIGN KEY (`fk_escuela`) REFERENCES `escuela` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `alumnoscursos`
--
ALTER TABLE `alumnoscursos`
  ADD CONSTRAINT `alumnos` FOREIGN KEY (`fk_alumnos`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `cursos` FOREIGN KEY (`fk_cursos`) REFERENCES `cursos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
