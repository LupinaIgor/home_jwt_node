import { createServer } from "http";

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

        res.end('JWT ready');

    });
// Run socket server
httpServer.listen(3030, () => {
    console.log("JWT Key server is running on http://localhost:3030");
});