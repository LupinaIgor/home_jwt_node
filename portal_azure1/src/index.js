import {SERVER_HOST, SERVER_NAME, SERVER_PORT} from "./config/index.js";

import express from 'express';
const app = express();

/**
 * Настройка папки статики
 */
import path from 'path';
const staticFolder = path.resolve('wwwroot');
console.log('StaticFolder', staticFolder)
app.use(express.static(staticFolder));

app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`HTTP Server '${SERVER_NAME}' is running on http://${SERVER_HOST}:${SERVER_PORT}`);

});