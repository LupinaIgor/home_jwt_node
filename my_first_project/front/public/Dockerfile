FROM node:20

# Обновляем пакеты и устанавливаем необходимые зависимости
RUN apt update && apt upgrade -y && \
    apt install -y mc && \
    apt clean && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию (по желанию)
WORKDIR /app

# Копіювання кода у рабочу папку
COPY ./src /app

# Install modules, lib e.t.c
RUN npm install


# Start Container
CMD ["npm", "run", "start"]