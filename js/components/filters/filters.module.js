import { showAllBooks } from "./showAllBooks.module.js";
import { hideAllBooks } from "./hideAllBooks.module.js";
import { showFilteredBook } from "./showFilteredBook.module.js";

export function filters(informationAboutAllBooks, target) {
    // список всех чекбоксов в состоянии checked
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // если нет ни одного чекбокса в состоянии checked то отображаем все книги
    if (checkedCheckboxes.length === 0) {
        showAllBooks();
        return;
    }

    // Собираем в массив значения чекбоксов которые мы отметили (перевели в состояние checked)
    const selectedYears = Array.from(checkedCheckboxes).map(checkbox => parseInt(checkbox.value));

    // Отбираем в массив книги которые соответствуют значениям чекбоксов (наши фильтра)
    const filteredBooks = informationAboutAllBooks.filter(book => selectedYears.includes(book[target]));

    // Скрываем все книги на странице
    hideAllBooks();

    // Показываем только те книги которые соответствуют нашим фильтрам (чекбоксам в состоянии checked)
    showFilteredBook(filteredBooks);
}