# Используем официальный образ .NET SDK для компиляции
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файл проекта и восстанавливаем зависимости
COPY ./src/MyServerApp.csproj ./
RUN dotnet restore

# Копируем все файлы и публикуем приложение
COPY ./src/ ./
RUN dotnet publish -c Release -o out

# Используем минимальный образ .NET Runtime для запуска приложения
FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app
COPY --from=build /app/out .

EXPOSE 5000

# Запускаем приложение
ENTRYPOINT ["dotnet", "MyServerApp.dll"]