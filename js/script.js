import { informationAboutAllBooks } from "./data.module.js";
import { renderBooks } from "./components/renderBooks.module.js";

import { renderNavigation } from "./components/navigation/renderNavigation.module.js";
import { filters } from "./components/filters/filters.module.js";
// ================================================================================================

const elementWrapper = document.querySelector('.wrapper');
const books = renderBooks(informationAboutAllBooks);
const navigation = renderNavigation();

elementWrapper.append(books, navigation);


// Назначаем обработчики событий для всех чекбоксов
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        filters(informationAboutAllBooks);
    });
});

// FIX: Решить проблему паралельной работы нескольких фильтров

// TODO: Фильтры по Автору, рейтингу, год прочтения
// TODO: Поиск книги по названию через input
// TODO: Добавление новой книги через input
// TODO: Общий счетчик книг
// TODO: Пагинация
