export function hideAllBooks() {
    const allBooks = document.querySelectorAll('.book');
    allBooks.forEach(book => {
        book.classList.remove('show');
        book.classList.add('hide');
    });
}