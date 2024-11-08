import {SERVER_HOST, SERVER_NAME, SERVER_PORT} from "./config/index.js";

import express from 'express';

import {handleRoute1} from "./controllers/route1.js";
import {handleRoute2} from "./controllers/route2.js";

const app = express();

// Первый маршрут
app.get('/api/express/first', handleRoute1);

// Второй маршрут
app.get('/api/express/second', handleRoute2);

app.get('*', (req, res) => {
    res.send('Any Other');
});

app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`HTTP Server '${SERVER_NAME}' is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});