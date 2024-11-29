import express from 'express';   //Импортируется модуль Express.js
const router = express.Router();
// express.Router() создает объект маршрутизатора.
// Этот объект помогает организовывать маршруты (routes) в приложении, разделяя их на модули.
// Можно группировать маршруты, связанные с загрузкой файлов, в один маршрутизатор.


import {uploadFileController} from "../controllers/uploadFile.controller.js";
// Здесь импортируется функция uploadFileController из файла контроллера uploadFile.controller.js.
// Этот контроллер определяет, что именно происходит, когда на маршрут /upload поступает POST-запрос.
import {uploadFileLocalController} from "../controllers/uploadFileLocal.controller.js";
import {uploadFileAzureController} from "../controllers/uploadFileAzure.controller.js";


router.post('/upload', uploadFileController);
// router.post() связывает HTTP POST-запрос на маршрут /upload с функцией uploadFileController.
// Когда клиент отправляет POST-запрос на этот маршрут, вызывается функция uploadFileController, которая:
// -Обрабатывает запрос.
// -Возвращает ответ (например, статус успешной загрузки или ошибку).

router.post('/upload-local', uploadFileLocalController);
router.post('/upload-azure', uploadFileAzureController);
//Это позволяет серверу обрабатывать новые маршруты /upload-local и /upload-azure
//Это надо, если требуется иметь несколько способов обработки запросов, - загружать файлы локально или в облако.



export default router;
// Маршрутизатор экспортируется как модуль, чтобы его можно было подключить в других частях приложения.