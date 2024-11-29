import {uploadToLocal} from "../services/files/uploadToLocal.js";

export const uploadFileLocalController = async (req, res) => {

    // Проверяем, есть ли файл в запросе
    if (!req.files || !req.files.avatar) {
        return res.status(400).json({ error: 'Файл не загружен' });
    }

    const file = req.files.avatar; // Получаем файл из запроса

    try {
        // Загружаем файл через модуль
        const uploadedFile = await uploadToLocal(file);

        res.json({
            message: 'Файл успешно загружен в локальное хранилище',
            file: uploadedFile,
        });
    } catch (err) {
        res.status(500).json({
            error: 'Ошибка загрузки файла в локальное хранилище',
            details: err.message,
        });
    }

};