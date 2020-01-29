-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 05, 2019 at 02:50 PM
-- Server version: 5.7.24
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geo garros`
--

-- --------------------------------------------------------

--
-- Table structure for table `geo garros objets`
--

CREATE TABLE `geo garros objets` (
  `id` int(4) NOT NULL,
  `nom` text NOT NULL,
  `type` text NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `zoom_minimal` float NOT NULL,
  `indice` text NOT NULL,
  `code` text NOT NULL,
  `lien_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `geo garros objets`
--

INSERT INTO `geo garros objets` (`id`, `nom`, `type`, `latitude`, `longitude`, `zoom_minimal`, `indice`, `code`, `lien_image`) VALUES
(1, 'chaussures', 'objet', -37.8215, 144.979, 12, '', '', '/images/chaussures.png'),
(2, 'raquette', 'objet', 41.9281, 12.4563, 12, '', '', '/images/raquette.png'),
(3, 'soleil', 'objet', -38.18, -65.16, 5, '', '', '/images/soleil.png'),
(4, 'préparateur physique', 'personne', -0.152707, 37.3092, 7, 'Pour solliciter mes services, il faut prouver ton intérêt qui est le tien pour mon pays, donne moi les initiales du recordman du monde de marathon.', 'EK', '/images/coach.png'),
(5, 'préparateur mental', 'personne', 31.716, 87.323, 7, '', '', '/images/psy.png'),
(6, 'potion', 'objet', 9.922, 2.384, 7, 'Pour que cette potion fonctionne, il lui manque un dernier ingrédient que tu dois rapporter de l\'extrême sud du Viet-Nam.', '', '/images/potion.png'),
(7, 'ingrédient secret', 'objet', 9.337, 105.271, 8, '', '', '/images/ingredientSecret.png'),
(8, 'coach de légende', 'personne', 35.1761, -89.9846, 12, 'Pour me mériter, prouve moi que tu me connais, donne moi l\'année de mon sacre à Roland Garros !', '1983', '/images/noah.png');

-- --------------------------------------------------------

--
-- Table structure for table `geo garros scores`
--

CREATE TABLE `geo garros scores` (
  `nom` text NOT NULL,
  `score` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `geo garros scores`
--

INSERT INTO `geo garros scores` (`nom`, `score`) VALUES
('Gaspard', 250),
('Walid', 260),
('Florentin', 513),
('Félix', 482);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `geo garros objets`
--
ALTER TABLE `geo garros objets`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
