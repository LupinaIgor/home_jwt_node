import dotenv from 'dotenv';//это пакет, который вы устанавливаете с помощью npm install dotenv. Он используется для работы с переменными окружения, которые могут быть сохранены в файле .env.
dotenv.config();
//dotenv.config() — этот метод загружает переменные окружения, определенные в файле .env, и добавляет их в объект process.env.
//process.env — это глобальный объект в Node.js, который содержит все переменные окружения для текущего процесса.

export const SERVER_NAME = process.env.SERVER_NAME || "Azure Express";
export const SERVER_HOST = process.env.SERVER_HOST || "0.0.0.0";
export const SERVER_PORT = process.env.SERVER_PORT || 3000;
//
// process.env — это объект, предоставляемый Node.js, который содержит переменные окружения.


/**
 * Объявление переменных для Azure Storage
 */
export const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME || 'pv321storage';//Имя учетной записи в Azure Storage (по умолчанию pv321).
export const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY || null;//Ключ доступа к учетной записи. По умолчанию null (значит, он должен быть обязательно задан в process.env).
export const AZURE_STORAGE_AVATAR_BASKET = process.env.AZURE_STORAGE_AVATAR_BASKET || 'avatars';//Имя контейнера (аналог папки) для хранения аватаров в Azure Storage. По умолчанию avatars.


// Эти переменные содержат данные для работы с Azure Storage, который предоставляет облачное хранилище.
// Значения переменных извлекаются из среды исполнения (переменных окружения, process.env), чтобы они не хранились в коде (это повышает безопасность).
// Если переменные окружения не заданы, используются значения по умолчанию.




/**
 * Настройка пути к временной папке загрузки
 */
//1. Импорты модулей
import path from 'path';//Это встроенный модуль Node.js, который помогает работать с файловыми путями.
import { fileURLToPath } from 'url';//Это функция из модуля url. Она используется для преобразования URL-файла в обычный файловый путь.
// 2. Определение текущего файла и директории
const __filename = fileURLToPath(import.meta.url);//__filename - Полный путь к текущему файлу
//import.meta.url - Возвращает полный URL текущего файла.Пример: file:///C:/Users/username/project/config/index.js.
//fileURLToPath(import.meta.url)- Преобразует этот URL в обычный файловый путь. Пример: C:\Users\username\project\config\index.js.
const __dirname = path.dirname(__filename);//__dirname - Путь к папке, где находится файл
//path.dirname(__filename)- Извлекает путь к папке, где находится текущий файл. Если __filename равен C:\Users\username\project\config\index.js, то __dirname станет C:\Users\username\project\config.
//3. Настройка пути для временной папки загрузки
export const UPLOAD_DIR = path.resolve(__dirname, '../uploads'); // Папка "uploads" в корне проекта
// path.resolve(__dirname, '../uploads') - Эта функция строит абсолютный путь к папке uploads, расположенной на уровень выше текущей директории.
// Как это работает:
//__dirname содержит путь к текущей папке (например, C:\Users\username\project\config).
//../uploads указывает:
//      .. — подняться на один уровень вверх (C:\Users\username\project).
//      uploads — перейти в папку uploads.
//Итог: Получаем путь C:\Users\username\project\uploads.
