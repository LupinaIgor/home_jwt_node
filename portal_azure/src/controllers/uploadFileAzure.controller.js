import {uploadToAzure} from "../services/files/uploadToAzure.js";

export const uploadFileAzureController = async (req, res) => {

    // Проверяем, есть ли файл в запросе
    if (!req.files || !req.files.avatar) {
        return res.status(400).json({ error: 'Файл не загружен' });
    }

    const file = req.files.avatar; // Получаем файл из запроса


    try {
        // Загружаем файл через модуль
        const uploadedFile = await uploadToAzure(file);

        res.json({
            message: 'Файл успешно загружен в Azure Storage',
            file: uploadedFile,
        });
    } catch (err) {
        res.status(500).json({
            error: 'Ошибка загрузки файла в Azure Storage',
            details: err.message,
        });
    }


};