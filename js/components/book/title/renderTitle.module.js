export function renderTitle(book) {
    const titleBook = document.createElement('h3');
    titleBook.innerText = book.title;
    titleBook.classList.add('title');

    return titleBook;
}