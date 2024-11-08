# Базовый образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY ./src/package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все содержимое папки src, кроме node_modules
COPY ./src ./

# Указываем команду для запуска приложения
CMD ["npm", "run", "start"]