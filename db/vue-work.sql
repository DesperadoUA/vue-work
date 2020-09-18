-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 18 2020 г., 18:40
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `vue-work`
--

-- --------------------------------------------------------

--
-- Структура таблицы `casinos`
--

CREATE TABLE `casinos` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT current_timestamp(),
  `link` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `site_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendors` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bonuses` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `casinos`
--

INSERT INTO `casinos` (`id`, `name`, `rating`, `link`, `site_url`, `thumbnail`, `country`, `vendors`, `bonuses`) VALUES
(1, 'SLOTOKING', '97%', 'http://sloto.loc/casino/kazino-slotoking/', 'slotoking.com', 'http://sloto.loc/wp-content/uploads/2020/08/slotoking.png', '[   \"Англия\",   \"Япония\",   \"Китай\",   \"Дания\" ]', '[   \"Igrosoft\",   \"IGT/CRYPTOLOGIC\",   \"NetEnt\",   \"Novomatic\" ]', '[   \"Cashback\",   \"VIP-предложения\",   \"Другие\" ]'),
(24, 'VULKAN ORIGINAL', '57%', 'http://sloto.loc/casino/casino-vulkan-original/', 'vulkanoriginals.com', 'http://sloto.loc/wp-content/uploads/2020/08/vulkan_original.png', '[   \"Англия\",   \"Япония\"]', '[   \"Igrosoft\",   \"IGT/CRYPTOLOGIC\",   \"NetEnt\" ]', '[   \"Cashback\"]'),
(25, 'REEL EMPEROR', '100%', 'http://sloto.loc/casino/kazino-reel-emperor/', 'reelemperor.com', 'http://sloto.loc/wp-content/uploads/2020/08/reelemperor.png', '[\"Англия\", \"Япония\", \"Украина\"]', '[\"Igrosoft\",\"IGT/CRYPTOLOGIC\",   \"NetEnt\", \"1x2 Gaming\" ]', '[\"Cashback\"]'),
(26, 'NETGAME', '100%', 'http://sloto.loc/casino/kazino-netgame/', 'reelemperor.com', 'http://sloto.loc/wp-content/uploads/2020/08/vipnet.png', '[\"Англия\", \"Япония\", \"Украина\", \"Дания\"]', '[\"Igrosoft\",\"IGT/CRYPTOLOGIC\",   \"NetEnt\", \"1x2 Gaming\" ]', '[\"Cashback\", \"Депозитный бонус\"]'),
(27, 'CASHPOT CASINO', '72.5', 'http://sloto.loc/casino/kazino-cashpot-casino/', 'cashpotcasino.com', 'http://sloto.loc/wp-content/uploads/2020/08/cashpot-casino.png', '[\"Англия\", \"Бразилия\", \"Украина\", \"Дания\"]', '[\"Igrosoft\",\"NetEnt\",\"1x2 Gaming\" ]', '[\"Cashback\", \"Депозитный бонус\", \"VIP бонус\"]'),
(28, 'PADDY POWER CASINO', '72.5', 'http://sloto.loc/casino/kazino-paddy-power-casino/', 'casino.paddypower.co', 'http://sloto.loc/wp-content/uploads/2020/08/paddy-power-casino-logo.jpg', '[\"Англия\", \"Канада\", \"Украина\", \"Дания\"]', '[\"Igrosoft\",\"NetEnt\",\"1x2 Gaming\", \"Playtech\" ]', '[\"Cashback\", \"Депозитный бонус\", \"VIP бонус\"]');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `status` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `status`) VALUES
(1, 'admin', '111', 'admin'),
(2, 'user1', '111', 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `casinos`
--
ALTER TABLE `casinos`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `casinos`
--
ALTER TABLE `casinos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
