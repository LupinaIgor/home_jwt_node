import {uploadFile} from "../services/files/upload.service.js";


export const uploadFileController = async (req, res) => {

    // Проверяем, есть ли файл в запросе
    if (!req.files || !req.files.avatar) {
        return res.status(400).json({ error: 'Файл не загружен' });
    }

    const file = req.files.avatar; // Получаем файл из запроса

    uploadFile(file)
        .then(uploadedFile => {
            res.json({
                message: 'Файл успешно загружен',
                file: uploadedFile,
            });
        })
        .catch(err => {
            res.status(500).json({
                error: 'Ошибка загрузки файла',
                details: err.message,
            });
        })
};