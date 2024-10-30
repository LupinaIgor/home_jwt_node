import { createServer } from "http";

import dotenv from "dotenv";// Модуль загрузки конфигруации
// Загрузить конфигурацию
dotenv.config();

// Получить данные о конфигурации - и если данных нет - назначить по умолчанию
const SERVER_HOST = process.env.SERVER_HOST || "0.0.0.0";
const SERVER_PORT = process.env.SERVER_PORT || 3030;

// Настройка выдачи ключей
import jwt from "jsonwebtoken"; // Модуль
const JWT_SECRET = process.env.JWT_SECRET || "1q2w3e4r"; // Секретный ключ
const JWT_TTL = process.env.JWT_TTL || "1h"; // Время жизни ключа


/**
 *
 * @param payload - что зашифровать в этот ключ
 * @returns {token} - JWT token
 */
const generateToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_TTL});
    return token
}

const httpServer = createServer(
    (req, res) => {
    // Добавляем заголовки CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Проверяем метод OPTIONS, если таковой - завершаем запрос
    if (req.method === 'OPTIONS') {
        res.writeHead(204); // Статус успешной обработки запроса без тела
        res.end();
        return;
    }

        const payload = {
            location: 'Lutsk',
            user: {
                id: 10,
                email: 'igorlupina222@gmail.com',
                name: 'igor l'
            }
        }

        const token = generateToken(payload);

        res.end(token);

    });
// Run socket server
httpServer.listen(SERVER_PORT, SERVER_HOST,() => {
    console.log(`JWT Key Create server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});