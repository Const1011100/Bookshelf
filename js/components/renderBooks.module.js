import { renderBook } from "./book/renderBook.module.js";

export function renderBooks(allBooks) {
    const elementBooks = document.createElement('div');

    elementBooks.classList.add('books__container');
    elementBooks.classList.add('_container');

    allBooks.forEach(book => {
        elementBooks.append(renderBook(book));
    });

    return elementBooks;
}