import { informationAboutAllBooks } from "./data.module.js";
import { renderBooks } from "./components/renderBooks.module.js";

import { renderNavigation } from "./components/navigation/renderNavigation.module.js";
import { filters } from "./components/filters/filters.module.js";
// ================================================================================================

const elementWrapper = document.querySelector('.wrapper');
const books = renderBooks(informationAboutAllBooks);
const navigation = [renderNavigation(informationAboutAllBooks, 'yearOfReading')];

elementWrapper.append(books, navigation[0]);


// Назначаем обработчики событий для всех чекбоксов
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        filters(informationAboutAllBooks, 'yearOfReading');
        //filters(informationAboutAllBooks, 'rating');
    });
});

// FIX: Вирішити проблему одночасної роботи декілької фільтрів (yearOfReading і rating і тд.)

// TODO: Фильтры по Автору, рейтингу, год прочтения
// TODO: Пошук книг по назві через input
// TODO: Додавання нових книг через input
// TODO: Загальний лічильник книг
// TODO: Пігінація
