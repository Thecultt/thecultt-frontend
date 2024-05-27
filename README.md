## Ресейл-платформа культовых сумок | THECULTT (Frontend)

## Стек технологий

-   TypeScript
-   React
-   Redux
-   axios
-   sass

## Установка

Клонируйте репозиторий.

```
git clone https://github.com/Thecultt/thecultt-frontend.git
```

Переход в рабочий каталог.

```
cd thecultt-frontend
```

Установка зависимостей

```
npm install
```

Конфигурация

```
Создайте файл .env и заполните его с примера .env.example
```

Запуск сборки

```
npm start
```

## Структура проекта

### /src

-   /assets - Все стили, шрифты, картинки и тд
-   /components - Компоненты
-   /functions - Дополнительные функции
-   /hooks - Кастомные хуки
-   /pages - Страницы
-   /redux - Redux
    -   /redux/reducers - Редюсеры
    -   /redux/actions - События
    -   /redux/types - Типы

## Руководство по написанию стилей и классов

-   При написании классов - используем методологию БЭМ
-   При создании нового логического блока (новая страница и тд.) в проекте - создаем отдельный файл .sass и подключаем в корневом style.sass
-   Стили интерфейса описываем в interface.sass
-   Переменные описываем в variables.sass
-   Анимации описываем в animations.sass
-   Mixin описываем в mixin.sass
-   Линейные стили, допускаются только тогда, когда стиль динамический. Например: background-image

## Руководство по стилю кода

Используем только функциональные компоненты

```TSX
import React from "react";

interface ExampleProps {}

const Example: React.FC<ExampleProps> = () => {
    return <div></div>;
};

export default Example;
```
